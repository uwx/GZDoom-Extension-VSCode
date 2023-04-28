import { ICompletionTreeDef } from "../utils";

export const actorfunctions: ICompletionTreeDef[] = [
  {
    "name": "VelFromAngle",
    "description": "void VelFromAngle(double speed = 0, double angle = 0)"
  },
  {
    "name": "Vel3DFromAngle",
    "description": "void Vel3DFromAngle(double speed, double angle, double pitch)"
  },
  {
    "name": "absangle",
    "description": "double absangle(double ang1, double ang2)"
  },
  {
    "name": "BobSin",
    "description": "double BobSin(double fb)"
  },
  {
    "name": "deltaangle",
    "description": "double deltaangle(double ang1, double ang2)"
  },
  {
    "name": "AngleToVector",
    "description": "Vector2 AngleToVector(double angle, double length = 1)"
  },
  {
    "name": "RotateVector",
    "description": "Vector2 RotateVector(Vector2 vec, double angle)"
  },
  {
    "name": "Vec2To",
    "description": "Vector2 Vec2To(Actor other)"
  },
  {
    "name": "Vec3To",
    "description": "Vector3 Vec3To(Actor other)"
  },
  {
    "name": "Vec3Offset",
    "description": "Vector3 Vec3Offset(double x, double y, double z, bool absolute = false)"
  },
  {
    "name": "Vec3Angle",
    "description": "Vector3 Vec3Angle(double length, double angle, double z = 0, bool absolute = false)"
  },
  {
    "name": "Vec2Angle",
    "description": "Vector2 Vec2Angle(double length, double angle, bool absolute = false)"
  },
  {
    "name": "Vec2Offset",
    "description": "Vector2 Vec2Offset(double x, double y, bool absolute = false)"
  },
  {
    "name": "Vec2OffsetZ",
    "description": "Vector3 Vec2OffsetZ(double x, double y, double atz, bool absolute = false)"
  },
  {
    "name": "CanRaise",
    "description": "bool CanRaise()"
  },
  {
    "name": "CheckClass",
    "description": "bool CheckClass(class<Actor> checkclass, int ptr_select = AAPTR_DEFAULT, bool match_superclass = false)"
  },
  {
    "name": "CheckSight",
    "description": "bool CheckSight(Actor target, int flags = 0)"
  },
  {
    "name": "CheckIfSeen",
    "description": "bool CheckIfSeen()"
  },
  {
    "name": "CheckIfTargetInLOS",
    "description": "bool CheckIfTargetInLOS(double fov = 0, int flags = 0, double dist_max = 0, double dist_close = 0)"
  },
  {
    "name": "CheckIfInTargetLOS",
    "description": "bool CheckIfInTargetLOS(double fov = 0, int flags = 0, double dist_max = 0, double dist_close = 0)"
  },
  {
    "name": "CheckLOF",
    "description": "bool CheckLOF(int flags = 0, double range = 0, double minrange = 0, double angle = 0, double pitch = 0, double offsetheight = 0, double offsetwidth = 0, int ptr_target = AAPTR_DEFAULT, double offsetforward = 0)"
  },
  {
    "name": "CheckSightOrRange",
    "description": "bool CheckSightOrRange(double distance, bool two_dimension = false)"
  },
  {
    "name": "CheckRange",
    "description": "bool CheckRange(double distance, bool two_dimension = false)"
  },
  {
    "name": "CheckIfCloser",
    "description": "bool CheckIfCloser(Actor targ, double dist, bool noz = false)"
  },
  {
    "name": "CheckProximity",
    "description": "bool CheckProximity(class<Actor> classname, double distance, int count = 1, int flags = 0, int ptr = AAPTR_DEFAULT)"
  },
  {
    "name": "CheckBlock",
    "description": "bool CheckBlock(int flags = 0, int ptr = AAPTR_DEFAULT, double xofs = 0, double yofs = 0, double zofs = 0, double angle = 0)"
  },
  {
    "name": "IsVisible",
    "description": "bool IsVisible(Actor other, bool allaround, LookExParams params = null)"
  },
  {
    "name": "CheckPosition",
    "description": "bool CheckPosition(Vector2 pos, bool actorsonly = false)"
  },
  {
    "name": "IsPointerEqual",
    "description": "bool IsPointerEqual(int ptr_select1, int ptr_select2)"
  },
  {
    "name": "CheckMissileSpawn",
    "description": "bool CheckMissileSpawn(double maxdist)"
  },
  {
    "name": "TestMobjLocation",
    "description": "bool TestMobjLocation()"
  },
  {
    "name": "HitFloor",
    "description": "bool HitFloor()"
  },
  {
    "name": "HitWater",
    "description": "bool HitWater(sector sec, Vector3 pos, bool checkabove = false, bool alert = true, bool force = false)"
  },
  {
    "name": "PlayerSkinCheck",
    "description": "bool PlayerSkinCheck()"
  },
  {
    "name": "CheckArmorType",
    "description": "bool CheckArmorType(name Type, int amount = 1)"
  },
  {
    "name": "CheckLocalView",
    "description": "bool CheckLocalView(int consoleplayer)"
  },
  {
    "name": "IsZeroDamage",
    "description": "bool IsZeroDamage()"
  },
  {
    "name": "GetClassName",
    "description": "name GetClassName()"
  },
  {
    "name": "GetTag",
    "description": "string GetTag(string defstr = \"\")"
  },
  {
    "name": "GetSpecies",
    "description": "name GetSpecies()"
  },
  {
    "name": "PlayerNumber",
    "description": "int PlayerNumber()"
  },
  {
    "name": "GetUserName",
    "description": "string GetUserName()"
  },
  {
    "name": "SpawnHealth",
    "description": "int SpawnHealth()"
  },
  {
    "name": "GetDefaultSpeed",
    "description": "static double GetDefaultSpeed(class<Actor> type)"
  },
  {
    "name": "GetDefaultByType",
    "description": "static struct[?] GetDefaultByType(class<Actor> type)"
  },
  {
    "name": "GetCameraHeight",
    "description": "double GetCameraHeight()"
  },
  {
    "name": "GetGravity",
    "description": "clearscope double GetGravity() const"
  },
  {
    "name": "CountsAsKill",
    "description": "bool CountsAsKill()"
  },
  {
    "name": "GetMissileDamage",
    "description": "int GetMissileDamage(int mask, int add, int ptr = AAPTR_DEFAULT)"
  },
  {
    "name": "GetModifiedDamage",
    "description": "int GetModifiedDamage(Name damagetype, int damage, bool passive)"
  },
  {
    "name": "GetSpawnableType",
    "description": "static class<Actor> GetSpawnableType(int spawnnum)"
  },
  {
    "name": "GetSpriteIndex",
    "description": "static int GetSpriteIndex(name sprt)"
  },
  {
    "name": "GetPointer",
    "description": "Actor GetPointer(int aaptr)"
  },
  {
    "name": "Distance2D",
    "description": "double Distance2D(Actor other)"
  },
  {
    "name": "Distance3D",
    "description": "double Distance3D(Actor other)"
  },
  {
    "name": "DistanceBySpeed",
    "description": "double DistanceBySpeed(Actor other, double speed)"
  },
  {
    "name": "AngleTo",
    "description": "double AngleTo(Actor target, bool absolute = false)"
  },
  {
    "name": "AimTarget",
    "description": "Actor AimTarget()"
  },
  {
    "name": "LineTrace",
    "description": "bool LineTrace(double angle, double distance, double pitch, int flags = 0, double offsetz = 0., double offsetforward = 0., doubl offsetside = 0., out FLineTraceData data = null)"
  },
  {
    "name": "AccuracyFactor",
    "description": "float AccuracyFactor()"
  },
  {
    "name": "GetDropItems",
    "description": "DropItem GetDropItems()"
  },
  {
    "name": "FindFloorCeiling",
    "description": "void FindFloorCeiling(int flags = 0)"
  },
  {
    "name": "GetFloorTerrain",
    "description": "TerrainDef GetFloorTerrain()"
  },
  {
    "name": "GetFriction",
    "description": "double, double GetFriction()"
  },
  {
    "name": "TestMobjZ",
    "description": "bool, Actor TestMobjZ(bool quick = false)"
  },
  {
    "name": "GetBobOffset",
    "description": "double GetBobOffset(double frac = 0)"
  },
  {
    "name": "RoughMonsterSearch",
    "description": "Actor RoughMonsterSearch(int distance, bool onlyseekable = false, bool frontonly = false)"
  },
  {
    "name": "FindUniqueTid",
    "description": "static int FindUniqueTid(int start = 0, int limit = 0)"
  },
  {
    "name": "GetRenderStyle",
    "description": "clearscope int GetRenderStyle() const"
  },
  {
    "name": "GetReplacement",
    "description": "static class<Actor> GetReplacement(class<Actor> cls)"
  },
  {
    "name": "GetReplacee",
    "description": "static class<Actor> GetReplacee(class<Actor> cls)"
  },
  {
    "name": "GetLevelSpawnTime",
    "description": "clearscope int GetLevelSpawnTime() const"
  },
  {
    "name": "GetAge",
    "description": "clearscope int GetAge() const"
  },
  {
    "name": "GetRadiusDamage",
    "description": "int GetRadiusDamage(Actor thing, int damage, int distance, int fulldmgdistance = 0, bool oldradiusdmg = false)"
  },
  {
    "name": "SetTag",
    "description": "void SetTag(string defstr = \"\")"
  },
  {
    "name": "ChangeTid",
    "description": "void ChangeTid(int newtid)"
  },
  {
    "name": "SetDamage",
    "description": "void SetDamage(int dmg)"
  },
  {
    "name": "ApplyDamageFactor",
    "description": "int ApplyDamageFactor(Name damagetype, int damage)"
  },
  {
    "name": "ApplyDamageFactors",
    "description": "static int ApplyDamageFactors(class<Inventory> itemcls, Name damagetype, int damage, int defdamage)"
  },
  {
    "name": "RestoreDamage",
    "description": "void RestoreDamage()"
  },
  {
    "name": "RestoreRenderStyle",
    "description": "void RestoreRenderStyle()"
  },
  {
    "name": "SetShade",
    "description": "void SetShade(color col)"
  },
  {
    "name": "ClearCounters",
    "description": "void ClearCounters()"
  },
  {
    "name": "AdjustFloorClip",
    "description": "void AdjustFloorClip()"
  },
  {
    "name": "ClearBounce",
    "description": "void ClearBounce()"
  },
  {
    "name": "GiveBody",
    "description": "bool GiveBody(int num, int max=0)"
  },
  {
    "name": "SetFriendPlayer",
    "description": "void SetFriendPlayer(PlayerInfo player)"
  },
  {
    "name": "ExplodeMissile",
    "description": "void ExplodeMissile(line lin = null, Actor target = null)"
  },
  {
    "name": "SetIdle",
    "description": "void SetIdle(bool nofunction = false)"
  },
  {
    "name": "RemoveFromHash",
    "description": "void RemoveFromHash()"
  },
  {
    "name": "LinkToWorld",
    "description": "void LinkToWorld()"
  },
  {
    "name": "UnlinkFromWorld",
    "description": "void UnlinkFromWorld()"
  },
  {
    "name": "A_ChangeLinkFlags",
    "description": "void A_ChangeLinkFlags(int blockmap = FLAG_NO_CHANGE, int sector = FLAG_NO_CHANGE)"
  },
  {
    "name": "CopyFriendliness",
    "description": "void CopyFriendliness(Actor other, bool changeTarget, bool resetHealth = true)"
  },
  {
    "name": "DrawSplash",
    "description": "void DrawSplash(int count, double angle, int kind)"
  },
  {
    "name": "GiveSecret",
    "description": "void GiveSecret(bool printmsg = true, bool playsound = true)"
  },
  {
    "name": "A_Face",
    "description": "void A_Face(Actor faceto, double max_turn = 0, double max_pitch = 270, double ang_offset = 0, double pitch_offset = 0, int flags = 0 double z_add = 0)"
  },
  {
    "name": "Revive",
    "description": "void Revive()"
  },
  {
    "name": "RaiseActor",
    "description": "bool RaiseActor(Actor other, int flags = 0)"
  },
  {
    "name": "Spawn",
    "description": "static Actor Spawn(class<Actor> type, vector3 pos = (0,0,0), int replace = NO_REPLACE)"
  },
  {
    "name": "SpawnTeleportFog",
    "description": "void SpawnTeleportFog(Vector3 pos, bool beforeTele, bool setTarget)"
  },
  {
    "name": "SpawnBlood",
    "description": "void SpawnBlood(Vector3 pos1, double dir, int damage)"
  },
  {
    "name": "BloodSplatter",
    "description": "void BloodSplatter(Vector3 pos, double hitangle, bool axe = false)"
  },
  {
    "name": "SpawnDirt",
    "description": "void SpawnDirt(double radius)"
  },
  {
    "name": "FindState",
    "description": "state FindState(statelabel st, bool exact = false)"
  },
  {
    "name": "InStateSequence",
    "description": "bool InStateSequence(State newstate, State basestate)"
  },
  {
    "name": "SetState",
    "description": "bool SetState(state st, bool nofunction = false)"
  },
  {
    "name": "SetStateLabel",
    "description": "bool SetStateLabel(statelabel st, bool nofunction = false) { return SetState(FindState(st), nofunction) }"
  },
  {
    "name": "ResolveState",
    "description": "action state ResolveState(statelabel st) //this one, unlike FindState, is context aware."
  },
  {
    "name": "SetOrigin",
    "description": "void SetOrigin(vector3 newpos, bool moving)"
  },
  {
    "name": "SetXYZ",
    "description": "void SetXYZ(vector3 newpos)"
  },
  {
    "name": "Teleport",
    "description": "bool Teleport(Vector3 pos, double angle, int flags)"
  },
  {
    "name": "TeleportMove",
    "description": "bool TeleportMove(Vector3 pos, bool telefrag, bool modifyactor = true)"
  },
  {
    "name": "AddZ",
    "description": "void AddZ(double zadd, bool moving = true)"
  },
  {
    "name": "SetZ",
    "description": "void SetZ(double z)"
  },
  {
    "name": "Thrust",
    "description": "void Thrust(double speed = 0, double angle = 0)"
  },
  {
    "name": "SinkMobj",
    "description": "bool SinkMobj(double speed)"
  },
  {
    "name": "RaiseMobj",
    "description": "bool RaiseMobj(double speed)"
  },
  {
    "name": "LookForMonsters",
    "description": "bool LookForMonsters()"
  },
  {
    "name": "LookForTid",
    "description": "bool LookForTid(bool allaround, LookExParams params = null)"
  },
  {
    "name": "LookForEnemies",
    "description": "bool LookForEnemies(bool allaround, LookExParams params = null)"
  },
  {
    "name": "LookForPlayers",
    "description": "bool LookForPlayers(bool allaround, LookExParams params = null)"
  },
  {
    "name": "MonsterMove",
    "description": "bool MonsterMove()"
  },
  {
    "name": "TryWalk",
    "description": "bool TryWalk()"
  },
  {
    "name": "TryMove",
    "description": "bool TryMove(vector2 newpos, int dropoff, bool missilecheck = false, FCheckPosition tm = null)"
  },
  {
    "name": "CheckMove",
    "description": "bool CheckMove(vector2 newpos, int flags = 0, FCheckPosition tm = null)"
  },
  {
    "name": "NewChaseDir",
    "description": "void NewChaseDir()"
  },
  {
    "name": "RandomChaseDir",
    "description": "void RandomChaseDir()"
  },
  {
    "name": "CheckMeleeRange",
    "description": "bool CheckMeleeRange()"
  },
  {
    "name": "CheckMeleeRange2",
    "description": "bool CheckMeleeRange2()"
  },
  {
    "name": "CheckMissileRange",
    "description": "bool CheckMissileRange()"
  },
  {
    "name": "isFriend",
    "description": "bool isFriend(Actor other)"
  },
  {
    "name": "isHostile",
    "description": "bool isHostile(Actor other)"
  },
  {
    "name": "isTeammate",
    "description": "bool isTeammate(Actor other)"
  },
  {
    "name": "HitFriend",
    "description": "bool HitFriend()"
  },
  {
    "name": "CheckBossDeath",
    "description": "bool CheckBossDeath()"
  },
  {
    "name": "SoundAlert",
    "description": "void SoundAlert(Actor target, bool splash = false, double maxdist = 0)"
  },
  {
    "name": "DaggerAlert",
    "description": "void DaggerAlert(Actor target)"
  },
  {
    "name": "PlaySpawnSound",
    "description": "void PlaySpawnSound(Actor missile)"
  },
  {
    "name": "PlayActiveSound",
    "description": "void PlayActiveSound()"
  },
  {
    "name": "Howl",
    "description": "void Howl()"
  },
  {
    "name": "OldSpawnMissile",
    "description": "Actor OldSpawnMissile(Actor dest, class<Actor> type, Actor owner = null)"
  },
  {
    "name": "SpawnMissile",
    "description": "Actor SpawnMissile(Actor dest, class<Actor> type, Actor owner = null)"
  },
  {
    "name": "SpawnMissileXYZ",
    "description": "Actor SpawnMissileXYZ(Vector3 pos, Actor dest, Class<Actor> type, bool checkspawn = true, Actor owner = null)"
  },
  {
    "name": "SpawnMissileZ",
    "description": "Actor SpawnMissileZ(double z, Actor dest, class<Actor> type)"
  },
  {
    "name": "SpawnMissileAngleZSpeed",
    "description": "Actor SpawnMissileAngleZSpeed(double z, class<Actor> type, double angle, double vz, double speed, Actor owner = null, bool checkspawn = true)"
  },
  {
    "name": "SpawnMissileZAimed",
    "description": "Actor SpawnMissileZAimed(double z, Actor dest, Class<Actor> type)"
  },
  {
    "name": "SpawnMissileAngle",
    "description": "Actor SpawnMissileAngle(class<Actor> type, double angle, double vz)"
  },
  {
    "name": "SpawnMissileAngleZ",
    "description": "Actor SpawnMissileAngleZ(double z, class<Actor> type, double angle, double vz)"
  },
  {
    "name": "SpawnSubMissile",
    "description": "Actor SpawnSubMissile(Class<Actor> type, Actor target)"
  },
  {
    "name": "SpawnPlayerMissile",
    "description": "Actor, Actor SpawnPlayerMissile(class<Actor> type, double angle = 0, double x = 0, double y = 0, double z = 0, out FTranslatedLineTarget pLineTarget = null, bool nofreeaim = false, *bool noautoaim = false, int aimflags = 0)"
  },
  {
    "name": "CanSeek",
    "description": "bool CanSeek(Actor target)"
  },
  {
    "name": "BulletSlope",
    "description": "double BulletSlope(out FTranslatedLineTarget pLineTarget = null, int aimflags = 0)"
  },
  {
    "name": "AimLineAttack",
    "description": "double AimLineAttack(double angle, double distance, out FTranslatedLineTarget pLineTarget = null, double vrange = 0., int flags = 0, Actor target = null, Actor friender = null)"
  },
  {
    "name": "LineAttack",
    "description": "Actor, int LineAttack(double angle, double distance, double pitch, int damage, Name damageType, class<Actor> pufftype, int flags = 0, out FTranslatedLineTarget victim = null, double offsetz = 0., double offsetforward = 0., double offsetside = 0.)"
  },
  {
    "name": "SpawnPuff",
    "description": "Actor SpawnPuff(class<Actor> pufftype, vector3 pos, double hitdir, double particledir, int updown, int flags = 0, Actor victim = null)"
  },
  {
    "name": "DamageMobj",
    "description": "int DamageMobj(Actor inflictor, Actor source, int damage, Name mod, int flags = 0, double angle = 0)"
  },
  {
    "name": "PoisonMobj",
    "description": "void PoisonMobj(Actor inflictor, Actor source, int damage, int duration, int period, Name type)"
  },
  {
    "name": "TraceBleed",
    "description": "void TraceBleed(int damage, Actor missile)"
  },
  {
    "name": "TraceBleedAngle",
    "description": "void TraceBleedAngle(int damage, double angle, double pitch)"
  },
  {
    "name": "CheckInventory",
    "description": "bool CheckInventory(class<Inventory> itemtype, int itemamount, int owner = AAPTR_DEFAULT)"
  },
  {
    "name": "AddInventory",
    "description": "void AddInventory(Inventory inv)"
  },
  {
    "name": "RemoveInventory",
    "description": "void RemoveInventory(Inventory inv)"
  },
  {
    "name": "ClearInventory",
    "description": "void ClearInventory()"
  },
  {
    "name": "FindInventory",
    "description": "clearscope Inventory FindInventory(class<Inventory> itemtype, bool subclass = false) const"
  },
  {
    "name": "GiveInventoryType",
    "description": "Inventory GiveInventoryType(class<Inventory> itemtype)"
  },
  {
    "name": "DropInventory",
    "description": "Inventory DropInventory(Inventory item, int amt = -1)"
  },
  {
    "name": "UseInventory",
    "description": "bool UseInventory(Inventory item)"
  },
  {
    "name": "GiveAmmo",
    "description": "bool GiveAmmo(Class<Ammo> type, int amount)"
  }
];
