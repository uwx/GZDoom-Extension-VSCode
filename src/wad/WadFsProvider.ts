/**
 * Copyright (c) 2022 PROPHESSOR
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */

import * as vscode from 'vscode';
import { WadLump, WadParser } from './WadParser';
import { basename, extname } from 'path';
import { promises, readFileSync } from 'fs';
import ByteTools from './ByteTools';
import { FileSystemError } from 'vscode';

const { readFile } = promises;

export class WadFsProvider implements vscode.FileSystemProvider {
  private _wad: WadParser | null = null;

  get wad() {
    console.log('GET WAD', this._wad);
    return this._wad;
  }

  set wad(val: any) {
    console.log('SET WAD', val);
    this._wad = val;
  }

  async loadWad(uri: vscode.Uri) {
    console.warn('loadWad', uri.path);
    const buffer = await vscode.workspace.fs.readFile(uri)
    const container = new ByteTools(buffer as Buffer);
    this.wad = new WadParser(container);
    await this.wad.parse();
    console.warn('loaded wad', this.wad);
  }

  unloadWad() {
    this.wad = null;
  }

  async getLumps(): Promise<WadLump[]> {
    console.warn('getLumps');
    if (!this.wad?.lumps) throw FileSystemError.FileNotFound();

    return this.wad.lumps;
  }

  async getLump(name: string): Promise<WadLump | null> {
    console.warn('getLump', name);
    if (!this.wad?.lumps) throw FileSystemError.FileNotFound();

    return this.wad.lumps.find((x: WadLump) => x.name === name) || null;
  }

  async stat(uri: vscode.Uri): Promise<vscode.FileStat> {
    console.warn('stat wad', this.wad);
    // console.warn('stat', JSON.stringify(uri), uri.fsPath, extname(uri.fsPath).toLowerCase());

    if (extname(uri.fsPath).toLowerCase() === '.wad') {
      // console.warn('say that wad is a folder');
      return {
        ctime: Date.now(),
        mtime: Date.now(),
        size: 4096,
        type: vscode.FileType.Directory
      };
    }

    console.warn('this is not a wad', uri);

    if (!this.wad?.lumps) await this.loadWad(uri);
    if (!this.wad?.lumps) throw FileSystemError.FileNotFound();

    if (extname(uri.fsPath) === '.json') {
      console.warn('this is a json! Throw');
      throw FileSystemError.FileNotFound();
    }

    const lump = await this.getLump(basename(uri.path));

    if (!lump) throw FileSystemError.FileNotFound();

    return {
      ctime: Date.now(),
      mtime: Date.now(),
      size: lump.size,
      type: vscode.FileType.File,
      permissions: vscode.FilePermission.Readonly
    };
    // return this.wad.fileStat(uri.fsPath);
  }

  async readDirectory(uri: vscode.Uri): Promise<Array<[string, vscode.FileType]>> {
    console.warn('readDirectory', uri.fsPath, this.wad, JSON.stringify(uri));
    if (!this.wad?.lumps) await this.loadWad(uri);
    if (!this.wad?.lumps) throw FileSystemError.FileNotFound();

    const lumps = await this.getLumps();

    return lumps.map(x => [x.name, vscode.FileType.File]) || [];
  }

  async readFile(uri: vscode.Uri) {
    console.warn('readFile', uri.fsPath, this.wad);

    // if (!this.wad?.lumps) await this.loadWad(uri);
    if (!this.wad?.lumps) throw FileSystemError.FileNotFound();

    const lump = await this.getLump(basename(uri.path));

    if (!lump) throw FileSystemError.FileNotFound();

    return lump.read().buffer;

    return Buffer.from(`Hello from ${basename(uri.fsPath)}!`);
  }

  writeFile(uri: vscode.Uri, content: Uint8Array, options: { create: boolean, overwrite: boolean }): void {
    throw new Error('Not implemented');
    console.warn(Buffer.from(content));
  }

  rename(oldUri: vscode.Uri, newUri: vscode.Uri, options: { overwrite: boolean }): void {
    throw new Error(`Not implemented`);
  }

  delete(uri: vscode.Uri, options: { recursive: boolean }): void {
    throw new Error('Not implemented');
  }

  createDirectory(uri: vscode.Uri): void {
    throw new Error('Not supported');
  }

  private _emitter = new vscode.EventEmitter<Array<vscode.FileChangeEvent>>();
  readonly onDidChangeFile = this._emitter.event;

  watch(resource: vscode.Uri, opts: any): vscode.Disposable {
    return new vscode.Disposable(() => { });
  }
}
