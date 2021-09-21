//__HEAD__
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// app/Resolvers/AppServiceResolver.imba
var require_AppServiceResolver = __commonJS((exports2) => {
  __markAsModule(exports2);
  __export(exports2, {
    default: () => AppServiceResolver_default
  });
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  var AppServiceResolver = class extends import_framework21.ServiceResolver {
    boot() {
      import_framework21.AuthService.verificationMailer(VerifyEmail_default).resetPasswordMailer(ResetPassword_default);
      return this;
    }
  };
  var AppServiceResolver_default = AppServiceResolver;
});

// routes/api.imba
var require_api = __commonJS(() => {
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  import_framework21.Route.get("/", function(request2) {
    return request2.translate("index.hello", "Hello World");
  }).name("hello").middleware(["lang"]);
});

// routes/web.imba
var require_web = __commonJS(() => {
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  import_framework21.Route.get("/", function(request2, reply) {
    return reply.nextRender("/index");
  });
});

// app/Resolvers/RouterServiceResolver.imba
var require_RouterServiceResolver = __commonJS((exports2) => {
  __markAsModule(exports2);
  __export(exports2, {
    default: () => RouterServiceResolver_default
  });
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  var RouterServiceResolver = class extends import_framework21.ServiceResolver {
    boot() {
      import_framework21.Route.group({middleware: "jwt"}, function() {
        import_framework21.AuthService.routes();
        import_framework21.Route.group({prefix: "/api"}, function() {
          return require_api();
        });
        return require_web();
      });
      return this;
    }
  };
  var RouterServiceResolver_default = RouterServiceResolver;
});

// app/Resolvers/ValidationServiceResolver.imba
var require_ValidationServiceResolver = __commonJS((exports2) => {
  __markAsModule(exports2);
  __export(exports2, {
    default: () => ValidationServiceResolver_default
  });
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  var ValidationServiceResolver = class extends import_framework21.ValidationServiceResolver {
    registeredRules() {
      return {};
    }
  };
  var ValidationServiceResolver_default = ValidationServiceResolver;
});

// app/Resolvers/NextjsServiceResolver.imba
var require_NextjsServiceResolver = __commonJS((exports2) => {
  __markAsModule(exports2);
  __export(exports2, {
    default: () => NextjsServiceResolver_default
  });
  var import_framework21 = __toModule(require("@formidablejs/framework"));
  var NextjsServiceResolver = class extends import_framework21.ServiceResolver {
    boot() {
      this.app.register(require("fastify-nextjs"), {
        dev: this.app.config.get("app.debug"),
        dir: "./resources/js"
      });
      return this;
    }
  };
  var NextjsServiceResolver_default = NextjsServiceResolver;
});

// server.app.imba
var import_framework20 = __toModule(require("@formidablejs/framework"));

// bootstrap/app.imba
var import_framework = __toModule(require("@formidablejs/framework"));
var import_path = __toModule(require("path"));
var app = new import_framework.Application(import_path.default.resolve("./"));

// bootstrap/main.imba
var import_framework19 = __toModule(require("@formidablejs/framework"));

// config/index.imba
var import_framework11 = __toModule(require("@formidablejs/framework"));

// config/app.imba
var import_framework5 = __toModule(require("@formidablejs/framework"));

// node_modules/imba/src/imba/utils.imba
function iter$__(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var \u03A8__initor__ = Symbol.for("#__initor__");
var \u03A8__inited__ = Symbol.for("#__inited__");
var \u03A8type = Symbol.for("#type");
var \u03A8__listeners__ = Symbol.for("#__listeners__");
function deserializeData(data, reviver = null) {
  let objects = {};
  let reg = /\$\$\d+\$\$/;
  let lookup = function(value) {
    return objects[value] || (objects[value] = reviver ? reviver(value) : {});
  };
  let parser = function(key, value) {
    if (typeof value == "string") {
      if (value[0] == "$" && reg.test(value)) {
        return lookup(value);
      }
      ;
    } else if (typeof key == "string" && key[0] == "$" && reg.test(key)) {
      let obj = lookup(key);
      Object.assign(obj, value);
      return obj;
    }
    ;
    return value;
  };
  let parsed = JSON.parse(data, parser);
  return parsed;
}
function patchManifest(prev, curr) {
  var \u03C623, \u03C68, \u03C632, \u03C642;
  let origs = {};
  let diff = {
    added: [],
    changed: [],
    removed: [],
    all: [],
    urls: {}
  };
  if (prev.assets) {
    for (let i\u03C6 = 0, items\u03C62 = iter$__(prev.assets), len\u03C62 = items\u03C62.length; i\u03C6 < len\u03C62; i\u03C6++) {
      let item = items\u03C62[i\u03C6];
      let ref = item.originalPath || item.path;
      origs[ref] = item;
      if (item.url) {
        (\u03C623 = curr.urls)[\u03C68 = item.url] || (\u03C623[\u03C68] = item);
      }
      ;
    }
    ;
  }
  ;
  for (let i\u03C62 = 0, items\u03C63 = iter$__(curr.assets || []), len\u03C63 = items\u03C63.length; i\u03C62 < len\u03C63; i\u03C62++) {
    let item = items\u03C63[i\u03C62];
    let ref = item.originalPath || item.path;
    let orig = origs[ref];
    if (item.url && prev.urls) {
      prev.urls[item.url] = item;
    }
    ;
    if (orig) {
      if (orig.hash != item.hash) {
        orig.invalidated = Date.now();
        orig.replacedBy = item;
        item.replaces = orig;
        diff.changed.push(item);
        diff.all.push(item);
        if (orig == prev.main) {
          diff.main = item;
        }
        ;
      }
      ;
      \u03C632 = origs[ref], delete origs[ref], \u03C632;
    } else {
      diff.added.push(item);
      diff.all.push(item);
    }
    ;
  }
  ;
  for (let i\u03C63 = 0, keys\u03C6 = Object.keys(origs), l\u03C6 = keys\u03C6.length, path2, item; i\u03C63 < l\u03C6; i\u03C63++) {
    path2 = keys\u03C6[i\u03C63];
    item = origs[path2];
    item.removed = Date.now();
    diff.all.push(item);
  }
  ;
  for (let i\u03C64 = 0, items\u03C64 = iter$__(diff.all), len\u03C64 = items\u03C64.length; i\u03C64 < len\u03C64; i\u03C64++) {
    let item = items\u03C64[i\u03C64];
    let typ = diff[\u03C642 = item.type] || (diff[\u03C642] = []);
    typ.push(item);
  }
  ;
  diff.removed = Object.values(origs);
  curr.changes = diff;
  return curr;
}
function getDeepPropertyDescriptor(item, key, stop) {
  if (!item) {
    return void 0;
  }
  ;
  let desc = Object.getOwnPropertyDescriptor(item, key);
  if (desc || item == stop) {
    return desc || void 0;
  }
  ;
  return getDeepPropertyDescriptor(Reflect.getPrototypeOf(item), key, stop);
}

// node_modules/imba/src/imba/scheduler.imba
function iter$__2(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var \u03A8__init__ = Symbol.for("#__init__");
var \u03A8__initor__2 = Symbol.for("#__initor__");
var \u03A8__inited__2 = Symbol.for("#__inited__");
var \u03A8schedule = Symbol.for("#schedule");
var \u03A8frames = Symbol.for("#frames");
var \u03A8interval = Symbol.for("#interval");
var \u03A8stage = Symbol.for("#stage");
var \u03A8scheduled = Symbol.for("#scheduled");
var \u03A8fps = Symbol.for("#fps");
var \u03A8ticker = Symbol.for("#ticker");
var rAF = globalThis.requestAnimationFrame || function(blk) {
  return setTimeout1(blk, 1e3 / 60);
};
var SPF = 1 / 60;
var Scheduled = class {
  constructor($$ = null) {
    this[\u03A8__init__]($$);
  }
  [\u03A8__init__]($$ = null) {
    var v\u03C6;
    this.owner = $$ && (v\u03C6 = $$.owner) !== void 0 ? v\u03C6 : null;
    this.target = $$ && (v\u03C6 = $$.target) !== void 0 ? v\u03C6 : null;
    this.active = $$ && (v\u03C6 = $$.active) !== void 0 ? v\u03C6 : false;
    this.value = $$ && (v\u03C6 = $$.value) !== void 0 ? v\u03C6 : void 0;
    this.skip = $$ && (v\u03C6 = $$.skip) !== void 0 ? v\u03C6 : 0;
    this.last = $$ && (v\u03C6 = $$.last) !== void 0 ? v\u03C6 : 0;
  }
  tick(scheduler2, source) {
    this.last = this.owner[\u03A8frames];
    this.target.tick(this, source);
    return 1;
  }
  update(o, activate\u03A6) {
    let on = this.active;
    let val = o.value;
    let changed = this.value != val;
    if (changed) {
      this.deactivate();
      this.value = val;
    }
    ;
    if (this.value || on || activate\u03A6) {
      this.activate();
    }
    ;
    return this;
  }
  queue() {
    this.owner.add(this);
    return;
  }
  activate() {
    if (this.value === true) {
      this.owner.on("commit", this);
    } else if (this.value === false) {
      true;
    } else if (typeof this.value == "number") {
      let tock = this.value / (1e3 / 60);
      if (tock <= 2) {
        this.owner.on("raf", this);
      } else {
        this[\u03A8interval] = globalThis.setInterval(this.queue.bind(this), this.value);
      }
      ;
    }
    ;
    this.active = true;
    return this;
  }
  deactivate() {
    if (this.value === true) {
      this.owner.un("commit", this);
    }
    ;
    this.owner.un("raf", this);
    if (this[\u03A8interval]) {
      globalThis.clearInterval(this[\u03A8interval]);
      this[\u03A8interval] = null;
    }
    ;
    this.active = false;
    return this;
  }
};
var Scheduler = class {
  constructor() {
    var self = this;
    this.id = Symbol();
    this.queue = [];
    this.stage = -1;
    this[\u03A8stage] = -1;
    this[\u03A8frames] = 0;
    this[\u03A8scheduled] = false;
    this.listeners = {};
    this.intervals = {};
    self.commit = function() {
      self.add("commit");
      return self;
    };
    this[\u03A8fps] = 0;
    self.$promise = null;
    self.$resolve = null;
    this[\u03A8ticker] = function(e) {
      self[\u03A8scheduled] = false;
      return self.tick(e);
    };
    self;
  }
  add(item, force) {
    if (force || this.queue.indexOf(item) == -1) {
      this.queue.push(item);
    }
    ;
    if (!this[\u03A8scheduled]) {
      this[\u03A8schedule]();
    }
    ;
    return this;
  }
  listen(ns, item) {
    let set = this.listeners[ns];
    let first = !set;
    set || (set = this.listeners[ns] = new Set());
    set.add(item);
    if (ns == "raf" && first) {
      this.add("raf");
    }
    ;
    return this;
  }
  unlisten(ns, item) {
    var \u03C68;
    let set = this.listeners[ns];
    set && set.delete(item);
    if (ns == "raf" && set && set.size == 0) {
      \u03C68 = this.listeners.raf, delete this.listeners.raf, \u03C68;
    }
    ;
    return this;
  }
  on(ns, item) {
    return this.listen(ns, item);
  }
  un(ns, item) {
    return this.unlisten(ns, item);
  }
  get promise() {
    var self = this;
    return self.$promise || (self.$promise = new Promise(function(resolve) {
      return self.$resolve = resolve;
    }));
  }
  tick(timestamp) {
    var self = this;
    let items = this.queue;
    let frame = this[\u03A8frames]++;
    if (!this.ts) {
      this.ts = timestamp;
    }
    ;
    this.dt = timestamp - this.ts;
    this.ts = timestamp;
    this.queue = [];
    this[\u03A8stage] = 1;
    if (items.length) {
      for (let i = 0, items\u03C6 = iter$__2(items), len\u03C6 = items\u03C6.length; i < len\u03C6; i++) {
        let item = items\u03C6[i];
        if (typeof item === "string" && this.listeners[item]) {
          self.listeners[item].forEach(function(listener) {
            if (listener.tick instanceof Function) {
              return listener.tick(self, item);
            } else if (listener instanceof Function) {
              return listener(self, item);
            }
            ;
          });
        } else if (item instanceof Function) {
          item(self.dt, self);
        } else if (item.tick) {
          item.tick(self.dt, self);
        }
        ;
      }
      ;
    }
    ;
    this[\u03A8stage] = this[\u03A8scheduled] ? 0 : -1;
    if (self.$promise) {
      self.$resolve(self);
      self.$promise = self.$resolve = null;
    }
    ;
    if (self.listeners.raf && true) {
      self.add("raf");
    }
    ;
    return self;
  }
  [\u03A8schedule]() {
    if (!this[\u03A8scheduled]) {
      this[\u03A8scheduled] = true;
      if (this[\u03A8stage] == -1) {
        this[\u03A8stage] = 0;
      }
      ;
      rAF(this[\u03A8ticker]);
    }
    ;
    return this;
  }
  schedule(item, o) {
    var \u03C623, \u03C632;
    o || (o = item[\u03C623 = this.id] || (item[\u03C623] = {value: true}));
    let state = o[\u03C632 = this.id] || (o[\u03C632] = new Scheduled({owner: this, target: item}));
    return state.update(o, true);
  }
  unschedule(item, o = {}) {
    o || (o = item[this.id]);
    let state = o && o[this.id];
    if (state && state.active) {
      state.deactivate();
    }
    ;
    return this;
  }
};
var scheduler = new Scheduler();
function commit() {
  return scheduler.add("commit").promise;
}
function setTimeout(fn, ms) {
  return globalThis.setTimeout(function() {
    fn();
    commit();
    return;
  }, ms);
}
function setInterval(fn, ms) {
  return globalThis.setInterval(function() {
    fn();
    commit();
    return;
  }, ms);
}
var clearInterval = globalThis.clearInterval;
var clearTimeout = globalThis.clearTimeout;
var instance = globalThis.imba || (globalThis.imba = {});
instance.commit = commit;
instance.setTimeout = setTimeout;
instance.setInterval = setInterval;
instance.clearInterval = clearInterval;
instance.clearTimeout = clearTimeout;

// node_modules/imba/src/imba/manifest.imba
var import_events = __toModule(require("events"));
var import_fs = __toModule(require("fs"));
var import_path2 = __toModule(require("path"));
var \u03A8__initor__3 = Symbol.for("#__initor__");
var \u03A8__inited__3 = Symbol.for("#__inited__");
var \u03A8refresh = Symbol.for("#refresh");
var \u03A8__init__2 = Symbol.for("#__init__");
var \u03A8manifest = Symbol.for("#manifest");
var \u03A8absPath = Symbol.for("#absPath");
var \u03A8raw = Symbol.for("#raw");
var \u03A8watch = Symbol.for("#watch");
var \u03C6 = Symbol();
var Asset = class {
  constructor(manifest2) {
    this[\u03A8manifest] = manifest2;
  }
  get absPath() {
    return this[\u03A8absPath] || (this[\u03A8absPath] = this[\u03A8manifest].resolve(this));
  }
  get name() {
    return import_path2.default.basename(this.path);
  }
  get body() {
    return this.readSync();
  }
  readSync() {
    return import_fs.default.readFileSync(this.absPath, "utf-8");
  }
  pipe(res) {
    let stream = import_fs.default.createReadStream(this.absPath);
    return stream.pipe(res);
  }
  toString() {
    return this.url || this.absPath;
  }
};
var Manifest = class extends import_events.EventEmitter {
  static [\u03A8__init__2]() {
    this.prototype[\u03A8__initor__3] = \u03C6;
    return this;
  }
  constructor(options = {}) {
    var self;
    super();
    self = this;
    this.options = options;
    this.data = {};
    this.path = options.path;
    this.refs = {};
    self.reviver = function(key) {
      return new Asset(self);
    };
    self.init(options.data);
    this[\u03A8__initor__3] === \u03C6 && this[\u03A8__inited__3] && this[\u03A8__inited__3]();
  }
  get srcdir() {
    return import_path2.default.resolve(import_path2.default.dirname(this.path), this.data.srcdir);
  }
  get outdir() {
    return import_path2.default.resolve(import_path2.default.dirname(this.path), this.data.outdir);
  }
  get changes() {
    return this.data.changes || {};
  }
  get inputs() {
    return this.data.inputs;
  }
  get outputs() {
    return this.data.outputs;
  }
  get assets() {
    return this.data.assets;
  }
  get urls() {
    return this.data.urls || {};
  }
  get main() {
    return this.data.main;
  }
  get cwd() {
    return process.cwd();
  }
  get raw() {
    return this.data[\u03A8raw];
  }
  resolve(path2) {
    if (path2._ == "input") {
      return import_path2.default.resolve(this.srcdir || this.cwd, path2.path);
    } else if (path2._ == "output") {
      return import_path2.default.resolve(this.outdir, path2.path);
    } else {
      return import_path2.default.resolve(this.cwd, path2.path || path2);
    }
    ;
  }
  resolveAssetPath(path2) {
    return import_path2.default.resolve(this.outdir, path2);
  }
  read(path2) {
    return import_fs.default.readFileSync(this.resolve(path2), "utf-8");
  }
  loadFromFile(path2) {
    return import_fs.default.existsSync(path2) ? import_fs.default.readFileSync(path2, "utf-8") : "{}";
  }
  init(data = null) {
    if (data || this.path) {
      this.update(data);
    }
    ;
    return this;
  }
  update(raw) {
    if (raw == null) {
      if (this.path) {
        raw = this.loadFromFile(this.path);
      } else {
        console.warn("cannot update manifest without path");
      }
      ;
    }
    ;
    if (typeof raw == "string") {
      let str = raw;
      raw = deserializeData(raw, this.reviver);
      raw[\u03A8raw] = str;
    }
    ;
    this.data = patchManifest(this.data || {}, raw);
    if (this.data.changes.all.length) {
      this.emit("change", this.diff, this);
    }
    ;
    if (this.data.changes.main) {
      this.emit("change:main", this.data.main, this);
    }
    ;
    return this.data.changes;
  }
  serializeForBrowser() {
    return this.data[\u03A8raw];
  }
  [\u03A8refresh](data) {
    return true;
  }
  watch() {
    var self = this;
    if (this[\u03A8watch] != true ? (this[\u03A8watch] = true, true) : false) {
      return self.path && !process.env.IMBA_HMR && import_fs.default.watch(this.path, function(ev, name) {
        let exists = import_fs.default.existsSync(self.path);
        let stat = exists && import_fs.default.statSync(self.path);
        if (exists) {
          self.update();
        }
        ;
        return;
      });
    }
    ;
  }
  on(event, cb) {
    this.watch();
    return super.on(...arguments);
  }
};
Manifest[\u03A8__init__2]();
var LazyProxy = class {
  static for(getter) {
    return new Proxy({}, new this(getter));
  }
  constructor(getter) {
    this.getter = getter;
  }
  get target() {
    return this.getter();
  }
  get(_, key) {
    return this.target[key];
  }
  set(_, key, value) {
    this.target[key] = value;
    return true;
  }
};
var manifest = LazyProxy.for(function() {
  return globalThis[\u03A8manifest];
});

// node_modules/imba/src/imba/dom/schema.imba
function iter$__3(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var TYPES = {
  "": [-1, {id: 1, slot: 1, part: 1, elementTiming: "elementtiming"}],
  HTML: [-1, {title: 1, lang: 1, translate: 1, dir: 1, accessKey: "accesskey", draggable: 1, spellcheck: 1, autocapitalize: 1, inputMode: "inputmode", style: 1, tabIndex: "tabindex", enterKeyHint: "enterkeyhint"}],
  HTMLAnchor: [1, {target: 1, download: 1, ping: 1, rel: 1, relList: "rel", hreflang: 1, type: 1, referrerPolicy: "referrerpolicy", coords: 1, charset: 1, name: 1, rev: 1, shape: 1, href: 1}],
  HTMLArea: [1, {alt: 1, coords: 1, download: 1, shape: 1, target: 1, ping: 1, rel: 1, relList: "rel", referrerPolicy: "referrerpolicy", href: 1}],
  HTMLMedia: [1, {src: 1, crossOrigin: "crossorigin", preload: 1, controlsList: "controlslist"}],
  HTMLAudio: [4, {}],
  HTMLBase: [1, {href: 1, target: 1}],
  HTMLQuote: [1, {cite: 1}],
  HTMLBody: [1, {text: 1, link: 1, vLink: "vlink", aLink: "alink", bgColor: "bgcolor", background: 1}],
  HTMLBR: [1, {clear: 1}],
  HTMLButton: [1, {formAction: "formaction", formEnctype: "formenctype", formMethod: "formmethod", formTarget: "formtarget", name: 1, type: 1, value: 1}],
  HTMLCanvas: [1, {width: 1, height: 1}],
  HTMLTableCaption: [1, {align: 1}],
  HTMLTableCol: [1, {span: 1, align: 1, ch: "char", chOff: "charoff", vAlign: "valign", width: 1}],
  HTMLData: [1, {value: 1}],
  HTMLDataList: [1, {}],
  HTMLMod: [1, {cite: 1, dateTime: "datetime"}],
  HTMLDetails: [1, {}],
  HTMLDialog: [1, {}],
  HTMLDiv: [1, {align: 1}],
  HTMLDList: [1, {}],
  HTMLEmbed: [1, {src: 1, type: 1, width: 1, height: 1, align: 1, name: 1}],
  HTMLFieldSet: [1, {name: 1}],
  HTMLForm: [1, {acceptCharset: "accept-charset", action: 1, autocomplete: 1, enctype: 1, encoding: "enctype", method: 1, name: 1, target: 1}],
  HTMLHeading: [1, {align: 1}],
  HTMLHead: [1, {}],
  HTMLHR: [1, {align: 1, color: 1, size: 1, width: 1}],
  HTMLHtml: [1, {version: 1}],
  HTMLIFrame: [1, {src: 1, srcdoc: 1, name: 1, sandbox: 1, width: 1, height: 1, referrerPolicy: "referrerpolicy", csp: 1, allow: 1, align: 1, scrolling: 1, frameBorder: "frameborder", longDesc: "longdesc", marginHeight: "marginheight", marginWidth: "marginwidth", loading: 1}],
  HTMLImage: [1, {alt: 1, src: 1, srcset: 1, sizes: 1, crossOrigin: "crossorigin", useMap: "usemap", width: 1, height: 1, referrerPolicy: "referrerpolicy", decoding: 1, name: 1, lowsrc: 1, align: 1, hspace: 1, vspace: 1, longDesc: "longdesc", border: 1, loading: 1}],
  HTMLInput: [1, {accept: 1, alt: 1, autocomplete: 1, dirName: "dirname", formAction: "formaction", formEnctype: "formenctype", formMethod: "formmethod", formTarget: "formtarget", height: 1, max: 1, maxLength: "maxlength", min: 1, minLength: "minlength", name: 1, pattern: 1, placeholder: 1, src: 1, step: 1, type: 1, defaultValue: "value", value: 1, width: 1, align: 1, useMap: "usemap", required: 1}],
  HTMLLabel: [1, {htmlFor: "for"}],
  HTMLLegend: [1, {align: 1}],
  HTMLLI: [1, {value: 1, type: 1}],
  HTMLLink: [1, {href: 1, crossOrigin: "crossorigin", rel: 1, relList: "rel", media: 1, hreflang: 1, type: 1, as: 1, referrerPolicy: "referrerpolicy", sizes: 1, imageSrcset: "imagesrcset", imageSizes: "imagesizes", charset: 1, rev: 1, target: 1, integrity: 1}],
  HTMLMap: [1, {name: 1}],
  HTMLMenu: [1, {}],
  HTMLMeta: [1, {name: 1, httpEquiv: "http-equiv", content: 1, scheme: 1, property: 1, charset: 1}],
  HTMLMeter: [1, {value: 1, min: 1, max: 1, low: 1, high: 1, optimum: 1}],
  HTMLObject: [1, {data: 1, type: 1, name: 1, useMap: "usemap", width: 1, height: 1, align: 1, archive: 1, code: 1, hspace: 1, standby: 1, vspace: 1, codeBase: "codebase", codeType: "codetype", border: 1}],
  HTMLOList: [1, {start: 1, type: 1}],
  HTMLOptGroup: [1, {label: 1}],
  HTMLOption: [1, {label: 1, value: 1}],
  HTMLOutput: [1, {htmlFor: "for", name: 1}],
  HTMLParagraph: [1, {align: 1}],
  HTMLParam: [1, {name: 1, value: 1, type: 1, valueType: "valuetype"}],
  HTMLPicture: [1, {}],
  HTMLPre: [1, {width: 1}],
  HTMLProgress: [1, {value: 1, max: 1}],
  HTMLScript: [1, {src: 1, type: 1, charset: 1, crossOrigin: "crossorigin", referrerPolicy: "referrerpolicy", event: 1, htmlFor: "for", integrity: 1, defer: 1, async: 1}],
  HTMLSelect: [1, {autocomplete: 1, name: 1, size: 1, value: 1, required: 1}],
  HTMLSlot: [1, {name: 1}],
  HTMLSource: [1, {src: 1, type: 1, srcset: 1, sizes: 1, media: 1}],
  HTMLSpan: [1, {}],
  HTMLStyle: [1, {media: 1, type: 1}],
  HTMLTable: [1, {align: 1, border: 1, frame: 1, rules: 1, summary: 1, width: 1, bgColor: "bgcolor", cellPadding: "cellpadding", cellSpacing: "cellspacing"}],
  HTMLTableSection: [1, {align: 1, ch: "char", chOff: "charoff", vAlign: "valign"}],
  HTMLTableCell: [1, {colSpan: "colspan", rowSpan: "rowspan", headers: 1, align: 1, axis: 1, height: 1, width: 1, ch: "char", chOff: "charoff", vAlign: "valign", bgColor: "bgcolor", abbr: 1, scope: 1}],
  HTMLTemplate: [1, {}],
  HTMLTextArea: [1, {autocomplete: 1, cols: 1, dirName: "dirname", maxLength: "maxlength", minLength: "minlength", name: 1, placeholder: 1, rows: 1, wrap: 1}],
  HTMLTime: [1, {dateTime: "datetime"}],
  HTMLTitle: [1, {}],
  HTMLTableRow: [1, {align: 1, ch: "char", chOff: "charoff", vAlign: "valign", bgColor: "bgcolor"}],
  HTMLTrack: [1, {kind: 1, src: 1, srclang: 1, label: 1}],
  HTMLUList: [1, {type: 1}],
  HTMLVideo: [4, {width: 1, height: 1, poster: 1}],
  SVG: [-1, {}],
  SVGGraphics: [66, {transform: 1}],
  SVGA: [67, {}],
  SVGAnimation: [66, {}],
  SVGAnimate: [69, {}],
  SVGAnimateMotion: [69, {}],
  SVGAnimateTransform: [69, {}],
  SVGGeometry: [67, {}],
  SVGCircle: [73, {cx: 1, cy: 1, r: 1}],
  SVGClipPath: [67, {clipPathUnits: 1}],
  SVGDefs: [67, {}],
  SVGDesc: [66, {}],
  SVGDiscard: [66, {}],
  SVGEllipse: [73, {cx: 1, cy: 1, rx: 1, ry: 1}],
  SVGFEBlend: [66, {mode: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEColorMatrix: [66, {type: 1, values: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEComponentTransfer: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGFEComposite: [66, {operator: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEConvolveMatrix: [66, {orderX: 1, orderY: 1, kernelMatrix: 1, divisor: 1, edgeMode: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEDiffuseLighting: [66, {surfaceScale: 1, diffuseConstant: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEDisplacementMap: [66, {xChannelSelector: 1, yChannelSelector: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEDistantLight: [66, {}],
  SVGFEDropShadow: [66, {dx: 1, dy: 1, stdDeviationX: 1, stdDeviationY: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEFlood: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGComponentTransferFunction: [66, {type: 1, tableValues: 1, slope: 1, amplitude: 1, exponent: 1}],
  SVGFEFuncA: [90, {}],
  SVGFEFuncB: [90, {}],
  SVGFEFuncG: [90, {}],
  SVGFEFuncR: [90, {}],
  SVGFEGaussianBlur: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGFEImage: [66, {preserveAspectRatio: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEMerge: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGFEMergeNode: [66, {}],
  SVGFEMorphology: [66, {operator: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFEOffset: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGFEPointLight: [66, {}],
  SVGFESpecularLighting: [66, {surfaceScale: 1, specularConstant: 1, specularExponent: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFESpotLight: [66, {specularExponent: 1}],
  SVGFETile: [66, {x: 1, y: 1, width: 1, height: 1}],
  SVGFETurbulence: [66, {numOctaves: 1, stitchTiles: 1, type: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGFilter: [66, {filterUnits: 1, primitiveUnits: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGForeignObject: [67, {x: 1, y: 1, width: 1, height: 1}],
  SVGG: [67, {}],
  SVGImage: [67, {x: 1, y: 1, width: 1, height: 1, preserveAspectRatio: 1}],
  SVGLine: [73, {x1: 1, y1: 1, x2: 1, y2: 1}],
  SVGGradient: [66, {gradientUnits: 1, gradientTransform: 1, spreadMethod: 1}],
  SVGLinearGradient: [111, {x1: 1, y1: 1, x2: 1, y2: 1}],
  SVGMarker: [66, {refX: 1, refY: 1, markerUnits: 1, markerWidth: 1, markerHeight: 1, orientType: 1, orientAngle: 1, viewBox: 1, preserveAspectRatio: 1}],
  SVGMask: [66, {maskUnits: 1, maskContentUnits: 1, x: 1, y: 1, width: 1, height: 1}],
  SVGMetadata: [66, {}],
  SVGMPath: [66, {}],
  SVGPath: [73, {}],
  SVGPattern: [66, {patternUnits: 1, patternContentUnits: 1, patternTransform: 1, x: 1, y: 1, width: 1, height: 1, viewBox: 1, preserveAspectRatio: 1}],
  SVGPolygon: [73, {}],
  SVGPolyline: [73, {}],
  SVGRadialGradient: [111, {cx: 1, cy: 1, r: 1, fx: 1, fy: 1, fr: 1}],
  SVGRect: [73, {x: 1, y: 1, width: 1, height: 1, rx: 1, ry: 1}],
  SVGScript: [66, {}],
  SVGSet: [69, {}],
  SVGStop: [66, {}],
  SVGStyle: [66, {}],
  SVGSVG: [67, {x: 1, y: 1, width: 1, height: 1, viewBox: 1, preserveAspectRatio: 1}],
  SVGSwitch: [67, {}],
  SVGSymbol: [66, {viewBox: 1, preserveAspectRatio: 1}],
  SVGTextContent: [67, {textLength: 1, lengthAdjust: 1}],
  SVGTextPositioning: [130, {x: 1, y: 1, dx: 1, dy: 1, rotate: 1}],
  SVGText: [131, {}],
  SVGTextPath: [130, {startOffset: 1, method: 1, spacing: 1}],
  SVGTitle: [66, {}],
  SVGTSpan: [131, {}],
  SVGUse: [67, {x: 1, y: 1, width: 1, height: 1}],
  SVGView: [66, {viewBox: 1, preserveAspectRatio: 1}]
};
var MAP = {
  a: 2,
  abbr: 1,
  address: 1,
  area: 3,
  article: 1,
  aside: 1,
  audio: 5,
  b: 1,
  base: 6,
  bdi: 1,
  bdo: 1,
  blockquote: 7,
  body: 8,
  br: 9,
  button: 10,
  canvas: 11,
  caption: 12,
  cite: 1,
  code: 1,
  col: 13,
  colgroup: 13,
  data: 14,
  datalist: 15,
  dd: 1,
  del: 16,
  details: 17,
  dfn: 1,
  dialog: 18,
  div: 19,
  dl: 20,
  dt: 1,
  em: 1,
  embed: 21,
  fieldset: 22,
  figcaption: 1,
  figure: 1,
  footer: 1,
  form: 23,
  h1: 24,
  h2: 24,
  h3: 24,
  h4: 24,
  h5: 24,
  h6: 24,
  head: 25,
  header: 1,
  hgroup: 1,
  hr: 26,
  html: 27,
  i: 1,
  iframe: 28,
  img: 29,
  input: 30,
  ins: 16,
  kbd: 1,
  label: 31,
  legend: 32,
  li: 33,
  link: 34,
  main: 1,
  map: 35,
  mark: 1,
  menu: 36,
  meta: 37,
  meter: 38,
  nav: 1,
  noscript: 1,
  object: 39,
  ol: 40,
  optgroup: 41,
  option: 42,
  output: 43,
  p: 44,
  param: 45,
  picture: 46,
  pre: 47,
  progress: 48,
  q: 7,
  rp: 1,
  rt: 1,
  ruby: 1,
  s: 1,
  samp: 1,
  script: 49,
  section: 1,
  select: 50,
  slot: 51,
  small: 1,
  source: 52,
  span: 53,
  strike: 1,
  strong: 1,
  style: 54,
  sub: 1,
  summary: 1,
  sup: 1,
  table: 55,
  tbody: 56,
  td: 57,
  template: 58,
  textarea: 59,
  tfoot: 56,
  th: 57,
  thead: 56,
  time: 60,
  title: 61,
  tr: 62,
  track: 63,
  u: 1,
  ul: 64,
  var: 1,
  video: 65,
  wbr: 1,
  svg_a: 68,
  svg_animate: 70,
  svg_animateMotion: 71,
  svg_animateTransform: 72,
  svg_audio: 66,
  svg_canvas: 66,
  svg_circle: 74,
  svg_clipPath: 75,
  svg_defs: 76,
  svg_desc: 77,
  svg_discard: 78,
  svg_ellipse: 79,
  svg_feBlend: 80,
  svg_feColorMatrix: 81,
  svg_feComponentTransfer: 82,
  svg_feComposite: 83,
  svg_feConvolveMatrix: 84,
  svg_feDiffuseLighting: 85,
  svg_feDisplacementMap: 86,
  svg_feDistantLight: 87,
  svg_feDropShadow: 88,
  svg_feFlood: 89,
  svg_feFuncA: 91,
  svg_feFuncB: 92,
  svg_feFuncG: 93,
  svg_feFuncR: 94,
  svg_feGaussianBlur: 95,
  svg_feImage: 96,
  svg_feMerge: 97,
  svg_feMergeNode: 98,
  svg_feMorphology: 99,
  svg_feOffset: 100,
  svg_fePointLight: 101,
  svg_feSpecularLighting: 102,
  svg_feSpotLight: 103,
  svg_feTile: 104,
  svg_feTurbulence: 105,
  svg_filter: 106,
  svg_foreignObject: 107,
  svg_g: 108,
  svg_iframe: 66,
  svg_image: 109,
  svg_line: 110,
  svg_linearGradient: 112,
  svg_marker: 113,
  svg_mask: 114,
  svg_metadata: 115,
  svg_mpath: 116,
  svg_path: 117,
  svg_pattern: 118,
  svg_polygon: 119,
  svg_polyline: 120,
  svg_radialGradient: 121,
  svg_rect: 122,
  svg_script: 123,
  svg_set: 124,
  svg_stop: 125,
  svg_style: 126,
  svg_svg: 127,
  svg_switch: 128,
  svg_symbol: 129,
  svg_text: 132,
  svg_textPath: 133,
  svg_title: 134,
  svg_tspan: 135,
  svg_unknown: 66,
  svg_use: 136,
  svg_video: 66,
  svg_view: 137
};
var keys = Object.keys(TYPES);
for (let i = 0, items\u03C6 = iter$__3(keys), len\u03C6 = items\u03C6.length; i < len\u03C6; i++) {
  let typ = items\u03C6[i];
  let item = TYPES[typ];
  item.name = typ + "Element";
  item.up = TYPES[keys[item[0]]];
}
for (let i\u03C6 = 0, keys\u03C6 = Object.keys(MAP), l\u03C6 = keys\u03C6.length, name, ref; i\u03C6 < l\u03C6; i\u03C6++) {
  name = keys\u03C6[i\u03C6];
  ref = MAP[name];
  MAP[name] = TYPES[keys[ref]];
  if (name.indexOf("svg_") == 0) {
    MAP[name.replace("_", ":")] = MAP[name];
  }
  ;
}

// node_modules/imba/src/imba/bindings.node.imba
var import_async_hooks = __toModule(require("async_hooks"));

// node_modules/imba/src/imba/dom/flags.imba
var \u03A8__initor__4 = Symbol.for("#__initor__");
var \u03A8__inited__4 = Symbol.for("#__inited__");
var Flags = class {
  constructor(dom) {
    this.dom = dom;
    this.string = "";
  }
  contains(ref) {
    return this.dom.classList.contains(ref);
  }
  add(ref) {
    if (this.contains(ref)) {
      return this;
    }
    ;
    this.string += (this.string ? " " : "") + ref;
    this.dom.classList.add(ref);
    return this;
  }
  remove(ref) {
    if (!this.contains(ref)) {
      return this;
    }
    ;
    let regex = new RegExp("(^|\\s)*" + ref + "(\\s|$)*", "g");
    this.string = this.string.replace(regex, "");
    this.dom.classList.remove(ref);
    return this;
  }
  toggle(ref, bool) {
    if (bool === void 0) {
      bool = !this.contains(ref);
    }
    ;
    return bool ? this.add(ref) : this.remove(ref);
  }
  incr(ref) {
    let m = this.stacks || (this.stacks = {});
    let c = m[ref] || 0;
    if (c < 1) {
      this.add(ref);
    }
    ;
    return m[ref] = Math.max(c, 0) + 1;
  }
  decr(ref) {
    let m = this.stacks || (this.stacks = {});
    let c = m[ref] || 0;
    if (c == 1) {
      this.remove(ref);
    }
    ;
    return m[ref] = Math.max(c, 1) - 1;
  }
  valueOf() {
    return this.string;
  }
  toString() {
    return this.string;
  }
  sync() {
    return this.dom.flagSync$();
  }
};

// node_modules/imba/src/imba/dom/core.imba
function iter$__4(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var \u03A8__initor__5 = Symbol.for("#__initor__");
var \u03A8__inited__5 = Symbol.for("#__inited__");
var \u03A8__init__3 = Symbol.for("#__init__");
var \u03A8parent = Symbol.for("#parent");
var \u03A8context = Symbol.for("#context");
var \u03A8replaceChild = Symbol.for("#replaceChild");
var \u03A8appendChild = Symbol.for("#appendChild");
var \u03A8removeChild = Symbol.for("#removeChild");
var \u03A8insertInto = Symbol.for("#insertInto");
var \u03A8insertChild = Symbol.for("#insertChild");
var \u03A8removeFrom = Symbol.for("#removeFrom");
var \u03A8removeFromDeopt = Symbol.for("#removeFromDeopt");
var \u03A8replaceWith = Symbol.for("#replaceWith");
var \u03A8replaceWithDeopt = Symbol.for("#replaceWithDeopt");
var \u03A8placeholderNode = Symbol.for("#placeholderNode");
var \u03A8attachToParent = Symbol.for("#attachToParent");
var \u03A8detachFromParent = Symbol.for("#detachFromParent");
var \u03A8placeChild = Symbol.for("#placeChild");
var \u03A8beforeReconcile = Symbol.for("#beforeReconcile");
var \u03A8afterReconcile = Symbol.for("#afterReconcile");
var \u03A8afterVisit = Symbol.for("#afterVisit");
var \u03A8document = Symbol.for("#document");
var \u03A8htmlNodeName = Symbol.for("#htmlNodeName");
var \u03A8ImbaElement = Symbol.for("#ImbaElement");
var \u03A8flags = Symbol.for("#flags");
var \u03A8scripts = Symbol.for("#scripts");
var \u03A8location = Symbol.for("#location");
var \u03A8\u03A8document = Symbol.for("##document");
var \u03A8\u03A8parent = Symbol.for("##parent");
var \u03A8\u03A8up = Symbol.for("##up");
var \u03A8\u03A8context = Symbol.for("##context");
var \u03A8domNode = Symbol.for("#domNode");
var \u03A8\u03A8placeholderNode = Symbol.for("##placeholderNode");
var \u03A8domDeopt = Symbol.for("#domDeopt");
var \u03A8insertIntoDeopt = Symbol.for("#insertIntoDeopt");
var \u03A8\u03A8classList = Symbol.for("##classList");
var \u03A8\u03A8style = Symbol.for("##style");
var \u03A8\u03A8dataset = Symbol.for("##dataset");
var \u03A8asset = Symbol.for("#asset");
var \u03A8innerHTML = Symbol.for("#innerHTML");
var \u03A8src = Symbol.for("#src");
var \u03A8dom = Symbol.for("#dom");
var \u03C62 = Symbol();
var \u03C622 = Symbol();
var \u03C63 = Symbol();
var \u03C64 = Symbol();
var \u03C65 = Symbol();
var asl = null;
var Location = class extends URL {
};
var voidElements = {
  area: true,
  base: true,
  br: true,
  col: true,
  embed: true,
  hr: true,
  img: true,
  input: true,
  keygen: true,
  link: true,
  meta: true,
  param: true,
  source: true,
  track: true,
  wbr: true
};
var HtmlContext = null;
var CustomTagToElementNames = {};
var CustomElementRegistry = class {
  define() {
    return this;
  }
  get() {
    return this;
  }
  upgrade() {
    return;
  }
  whenDefined() {
    return;
  }
};
var customElements = new CustomElementRegistry();
var CUSTOM_TYPES = {};
function getTagType(typ, klass) {
  let name = typ;
  if (typeof typ == "string") {
    typ = TYPES[typ] || MAP[typ] || TYPES[typ + "Element"] || MAP["svg_" + typ];
  }
  ;
  if (typ instanceof Node2) {
    return typ;
  }
  ;
  if (!typ) {
    return getTagType("HTML");
  }
  ;
  if (typ && !typ.klass) {
    class element extends getTagType(typ.up) {
    }
    ;
    typ.klass = element;
  }
  ;
  if (typ && !typ.idl) {
    typ.idl = true;
    let existing = Object.getOwnPropertyDescriptors(typ.klass.prototype);
    for (let o\u03C6 = typ[1], i\u03C6 = 0, keys\u03C6 = Object.keys(o\u03C6), l\u03C6 = keys\u03C6.length, key, alias; i\u03C6 < l\u03C6; i\u03C6++) {
      key = keys\u03C6[i\u03C6];
      alias = o\u03C6[key];
      let name2 = alias == 1 ? key : alias;
      if (existing[name2] || name2 == "style") {
        continue;
      }
      ;
      Object.defineProperty(typ.klass.prototype, key, {
        set: function(value) {
          this.setAttribute(name2, value);
          return;
        },
        get: function() {
          return this.getAttribute(name2);
        }
      });
    }
    ;
  }
  ;
  return typ.klass;
}
var escapeAttributeValue = function(val) {
  let str = typeof val == "string" ? val : String(val);
  if (str.indexOf('"') >= 0) {
    str = str.replace(/\"/g, "&quot;");
  }
  ;
  return str;
};
var escapeTextContent = function(val, nodeName) {
  let str = typeof val == "string" ? val : String(val);
  if (nodeName == "script") {
    return str;
  }
  ;
  if (str.indexOf('"') >= 0) {
    str = str.replace(/\"/g, "&quot;");
  }
  ;
  if (str.indexOf("<") >= 0) {
    str = str.replace(/\</g, "&lt;");
  }
  ;
  if (str.indexOf(">") >= 0) {
    str = str.replace(/\>/g, "&gt;");
  }
  ;
  return str;
};
var Document = class {
  static create(ctx, cb) {
    let doc2 = new Document();
    doc2[\u03A8context] = ctx;
    doc2.location = ctx.location;
    asl || (asl = new import_async_hooks.AsyncLocalStorage());
    asl.run(doc2, cb);
    return doc2;
  }
  constructor() {
    this;
  }
  get flags() {
    return this[\u03A8flags] || (this[\u03A8flags] = new Flags({classList: new DOMTokenList(this)}));
  }
  get scripts() {
    return this[\u03A8scripts] || (this[\u03A8scripts] = []);
  }
  set location(value) {
    if (typeof value == "string") {
      value = new Location(value);
    }
    ;
    this[\u03A8location] = value;
  }
  get location() {
    return this[\u03A8location] || (this[\u03A8location] = new Location("http://localhost/"));
  }
  createElement(name) {
    let ctor = getTagType(name);
    let el = new ctor(name);
    el.nodeName = name;
    return el;
  }
  createElementNS(ns, name) {
    if (ns == "http://www.w3.org/2000/svg") {
      let typ = getTagType("svg_" + name);
      let el = new typ();
      el.nodeName = name;
      return el;
    }
    ;
    return this.createElement(name);
  }
  createTextNode(value) {
    return new Text(value);
  }
  createComment(value) {
    return new Comment(value);
  }
  createDocumentFragment() {
    return new DocumentFragment();
  }
  getElementById(id) {
    return null;
  }
};
var doc = new Document();
var document = doc;
function get_document() {
  var _a;
  return asl && ((_a = asl == null ? void 0 : asl.getStore) == null ? void 0 : _a.call(asl)) || doc;
}
var DOMTokenList = class {
  constructor(dom, classes) {
    this.classes = classes || [];
    this.dom = dom;
  }
  add(flag) {
    if (this.classes.indexOf(flag) < 0) {
      this.classes.push(flag);
    }
    ;
    return this;
  }
  remove(flag) {
    let idx = this.classes.indexOf(flag);
    if (idx >= 0) {
      this.classes[idx] = "";
    }
    ;
    return this;
  }
  toggle(flag) {
    this.contains(flag) ? this.remove(flag) : this.add(flag);
    return this;
  }
  contains(flag) {
    return this.classes.indexOf(flag) >= 0;
  }
  clone(dom) {
    return new DOMTokenList(dom, this.classes.slice(0));
  }
  toString() {
    return this.classes.join(" ").trim();
  }
};
var StyleDeclaration = class {
  constructor() {
    this;
  }
  removeProperty(key) {
    var \u03C662;
    return \u03C662 = this[key], delete this[key], \u03C662;
  }
  setProperty(name, value) {
    return this[name] = value;
  }
  toString() {
    let items = [];
    for (let o\u03C62 = this, i\u03C62 = 0, keys\u03C62 = Object.keys(o\u03C62), l\u03C62 = keys\u03C62.length, k, v; i\u03C62 < l\u03C62; i\u03C62++) {
      k = keys\u03C62[i\u03C62];
      v = o\u03C62[k];
      if (!(v instanceof Function)) {
        items.push("" + k + ": " + v);
      }
      ;
    }
    ;
    return items.join(";");
  }
};
var DataSet = class {
  static wrap(node) {
    return new Proxy(node.attributes, new DataSet());
  }
  set(target, key, value) {
    target["data-" + key] = value;
    return true;
  }
  get(target, key) {
    return target["data-" + key];
  }
};
var contextHandler = {
  get(target, name) {
    let ctx = target;
    let val = void 0;
    while (ctx && val == void 0) {
      if (ctx = ctx[\u03A8parent]) {
        val = ctx[name];
      }
      ;
    }
    ;
    return val;
  }
};
var Node2 = class {
  toString() {
    return this.outerHTML;
  }
  get outerHTML() {
    return "";
  }
  text$(item) {
    this.textContent = item;
    return this;
  }
  get ownerDocument() {
    return this[\u03A8\u03A8document] || (this[\u03A8\u03A8document] = get_document());
  }
  get [\u03A8parent]() {
    return this[\u03A8\u03A8parent] || this.parentNode || this[\u03A8\u03A8up];
  }
  get [\u03A8context]() {
    return this[\u03A8\u03A8context] || (this[\u03A8\u03A8context] = new Proxy(this, contextHandler));
  }
  [\u03A8__init__3]() {
    return this;
  }
  [\u03A8replaceChild](newnode, oldnode) {
    let res = this[\u03A8insertChild](newnode, oldnode);
    this[\u03A8removeChild](oldnode);
    return res;
  }
  [\u03A8appendChild](newnode) {
    return newnode[\u03A8insertInto](this, null);
  }
  [\u03A8removeChild](node) {
    return node[\u03A8removeFrom](this);
  }
  [\u03A8insertInto](parent, before) {
    before ? parent.insertBefore(this, before) : parent.appendChild(this);
    return this;
  }
  [\u03A8insertChild](newnode, refnode) {
    return newnode[\u03A8insertInto](this, refnode);
  }
  [\u03A8removeFrom](parent) {
    return parent.removeChild(this);
  }
  [\u03A8removeFromDeopt](parent) {
    return parent.removeChild(this[\u03A8domNode] || this);
  }
  [\u03A8replaceWith](other, parent) {
    return parent[\u03A8replaceChild](other, this);
  }
  [\u03A8replaceWithDeopt](other, parent) {
    return parent[\u03A8replaceChild](other, this[\u03A8domNode] || this);
  }
  get [\u03A8placeholderNode]() {
    return this[\u03A8\u03A8placeholderNode] || (this[\u03A8\u03A8placeholderNode] = globalThis.document.createComment("placeholder"));
  }
  set [\u03A8placeholderNode](value) {
    let prev = this[\u03A8\u03A8placeholderNode];
    this[\u03A8\u03A8placeholderNode] = value;
    if (prev && prev != value && prev.parentNode) {
      prev[\u03A8replaceWith](value);
    }
    ;
  }
  [\u03A8attachToParent]() {
    let ph = this[\u03A8domNode];
    let par = ph && ph.parentNode;
    if (ph && par && ph != this) {
      this[\u03A8domNode] = null;
      this[\u03A8insertInto](par, ph);
      ph[\u03A8removeFrom](par);
    }
    ;
    return this;
  }
  [\u03A8detachFromParent]() {
    if (this[\u03A8domDeopt] != true ? (this[\u03A8domDeopt] = true, true) : false) {
      this[\u03A8replaceWith] = this[\u03A8replaceWithDeopt];
      this[\u03A8removeFrom] = this[\u03A8removeFromDeopt];
      this[\u03A8insertInto] = this[\u03A8insertIntoDeopt];
    }
    ;
    let ph = this[\u03A8placeholderNode];
    if (this.parentNode && ph != this) {
      ph[\u03A8insertInto](this.parentNode, this);
      this[\u03A8removeFrom](this.parentNode);
    }
    ;
    this[\u03A8domNode] = ph;
    return this;
  }
  [\u03A8placeChild](item, f, prev) {
    let type = typeof item;
    if (type === "undefined" || item === null) {
      if (prev && prev instanceof Comment) {
        return prev;
      }
      ;
      let el = new Comment("");
      return prev ? prev[\u03A8replaceWith](el, this) : el[\u03A8insertInto](this, null);
    }
    ;
    if (item === prev) {
      return item;
    } else if (type !== "object") {
      let res;
      let txt = item;
      if (f & 128 && f & 256 && false) {
        this.textContent = txt;
        return;
      }
      ;
      if (prev) {
        if (prev instanceof Text) {
          prev.textContent = txt;
          return prev;
        } else {
          res = document.createTextNode(txt);
          prev[\u03A8replaceWith](res, this);
          return res;
        }
        ;
      } else {
        this.appendChild(res = document.createTextNode(txt));
        return res;
      }
      ;
    } else {
      return prev ? prev[\u03A8replaceWith](item, this) : item[\u03A8insertInto](this, null);
    }
    ;
    return;
  }
};
var Text = class extends Node2 {
  static [\u03A8__init__3]() {
    this.prototype[\u03A8__initor__5] = \u03C622;
    return this;
  }
  constructor(str) {
    super();
    this.textContent = str || "";
    this;
    this[\u03A8__initor__5] === \u03C622 && this[\u03A8__inited__5] && this[\u03A8__inited__5]();
  }
  get outerHTML() {
    return this.textContent;
  }
};
Text[\u03A8__init__3]();
var Comment = class extends Node2 {
  static [\u03A8__init__3]() {
    this.prototype[\u03A8__initor__5] = \u03C63;
    return this;
  }
  constructor(value) {
    super();
    this.value = value;
    this[\u03A8__initor__5] === \u03C63 && this[\u03A8__inited__5] && this[\u03A8__inited__5]();
  }
  get outerHTML() {
    return "<!-- " + escapeTextContent(this.value) + " -->";
  }
  toString() {
    if (this.tag && this.tag.toNodeString) {
      return this.tag.toNodeString();
    }
    ;
    return this.outerHTML;
  }
};
Comment[\u03A8__init__3]();
var Element = class extends Node2 {
  static [\u03A8__init__3]() {
    this.prototype[\u03A8__initor__5] = \u03C64;
    return this;
  }
  constructor(name) {
    super();
    this.nodeName = name;
    this.childNodes = [];
    this.attributes = {};
    this;
    this[\u03A8__initor__5] === \u03C64 && this[\u03A8__inited__5] && this[\u03A8__inited__5]();
  }
  emit(name, detail, o = {bubbles: true}) {
    console.warn("Element#emit not supported on node");
    return;
  }
  get classList() {
    return this[\u03A8\u03A8classList] || (this[\u03A8\u03A8classList] = new DOMTokenList(this));
  }
  get style() {
    return this[\u03A8\u03A8style] || (this[\u03A8\u03A8style] = new StyleDeclaration());
  }
  get dataset() {
    return this[\u03A8\u03A8dataset] || (this[\u03A8\u03A8dataset] = DataSet.wrap(this));
  }
  get richValue() {
    return this.value;
  }
  set richValue(value) {
    this.value = value;
  }
  set asset(asset) {
    this[\u03A8asset] = asset;
  }
  get asset() {
    return this[\u03A8asset];
  }
  flag$() {
    return this;
  }
  flagIf$() {
    return this;
  }
  appendChild(child) {
    this.childNodes.push(child);
    child.parentNode = this;
    return child;
  }
  removeChild(child) {
    let idx = this.childNodes.indexOf(child);
    if (idx >= 0) {
      this.childNodes.splice(idx, 1);
    }
    ;
    return this;
  }
  replaceChild(newChild, oldChild) {
    let idx = this.childNodes.indexOf(oldChild);
    if (idx >= 0) {
      this.childNodes.splice(idx, 1, newChild);
      newChild.parentNode = this;
    }
    ;
    return oldChild;
  }
  insertBefore(node, before) {
    let idx = this.childNodes.indexOf(before);
    this.childNodes.splice(idx, 0, node);
    return this;
  }
  setAttribute(key, value) {
    this.attributes[key] = value;
    return this;
  }
  setAttributeNS(ns, key, value) {
    return this.setAttribute(ns + ":" + key, value);
  }
  getAttribute(key) {
    return this.attributes ? this.attributes[key] : void 0;
  }
  getAttributeNS(ns, key) {
    return this.getAttribute(ns + ":" + key);
  }
  removeAttribute(key) {
    var \u03C672;
    \u03C672 = this.attributes[key], delete this.attributes[key], \u03C672;
    return true;
  }
  addEventListener() {
    return this;
  }
  removeEventListener() {
    return this;
  }
  resolve() {
    return this;
  }
  set innerHTML(value) {
    this[\u03A8innerHTML] = value;
  }
  get innerHTML() {
    let o = "";
    if (this[\u03A8innerHTML]) {
      return this[\u03A8innerHTML];
    }
    ;
    if (this.textContent != void 0) {
      return escapeTextContent(this.textContent);
    }
    ;
    for (let i = 0, items\u03C6 = iter$__4(this.childNodes), len\u03C6 = items\u03C6.length; i < len\u03C6; i++) {
      let item = items\u03C6[i];
      if (item instanceof String) {
        o += escapeTextContent(item, this.nodeName);
      } else if (item instanceof Number) {
        o += "" + item;
      } else if (item) {
        o += item.outerHTML;
      }
      ;
    }
    ;
    return o;
  }
  get outerHTML() {
    let typ = this.nodeName;
    let nativeType = this[\u03A8htmlNodeName];
    let sel = "" + typ;
    if (nativeType) {
      sel = "" + nativeType + " is='" + typ + "'";
      typ = nativeType;
    }
    ;
    let v;
    let cls = this.classList.toString();
    if (this.dehydrate) {
      cls = cls ? "_ssr_ " + cls : "_ssr_";
    }
    ;
    if (v = this.id) {
      sel += ' id="' + escapeAttributeValue(v) + '"';
    }
    ;
    if (cls) {
      sel += ' class="' + escapeAttributeValue(cls) + '"';
    }
    ;
    for (let o\u03C63 = this.attributes, i\u03C63 = 0, keys\u03C63 = Object.keys(o\u03C63), l\u03C63 = keys\u03C63.length, key, value; i\u03C63 < l\u03C63; i\u03C63++) {
      key = keys\u03C63[i\u03C63];
      value = o\u03C63[key];
      sel += " " + key + '="' + escapeAttributeValue(value) + '"';
    }
    ;
    if (this[\u03A8\u03A8style]) {
      sel += ' style="' + escapeAttributeValue(this[\u03A8\u03A8style].toString()) + '"';
    }
    ;
    if (voidElements[typ]) {
      return "<" + sel + ">";
    } else {
      return "<" + sel + ">" + this.innerHTML + "</" + typ + ">";
    }
    ;
  }
  get firstChild() {
    return this.childNodes[0];
  }
  get lastChild() {
    return this.childNodes[this.childNodes.length - 1];
  }
  get firstElementChild() {
    let l = this.childNodes.length;
    let i = 0;
    while (i < l) {
      let el = this.childNodes[i++];
      if (el instanceof Element) {
        return el;
      }
      ;
    }
    ;
    return null;
  }
  get lastElementChild() {
    let i = this.childNodes.length;
    while (i > 0) {
      let el = this.childNodes[--i];
      if (el instanceof Element) {
        return el;
      }
      ;
    }
    ;
    return null;
  }
  get className() {
    return this.classList.toString();
  }
  set className(value) {
    this.classList.classes = (value || "").split(" ");
    this.classList.toString();
  }
  log(...params) {
    console.log(...params);
    return this;
  }
  slot$(name, ctx) {
    return this;
  }
  text$(item) {
    this.textContent = item;
    return this;
  }
  [\u03A8beforeReconcile]() {
    return this;
  }
  [\u03A8afterReconcile]() {
    return this;
  }
  [\u03A8afterVisit]() {
    if (this.render) {
      this.render();
    }
    ;
    return;
  }
  get flags() {
    if (!this.$flags) {
      this.$flags = new Flags(this);
      if (this.flag$ == Element.prototype.flag$) {
        this.flags$ext = this.className;
      }
      ;
      this.flagDeopt$();
    }
    ;
    return this.$flags;
  }
  flag$(str) {
    let ns = this.flags$ns;
    this.className = ns ? ns + (this.flags$ext = str) : this.flags$ext = str;
    return;
  }
  flagDeopt$() {
    var self = this;
    this.flag$ = this.flagExt$;
    self.flagSelf$ = function(str) {
      return self.flagSync$(self.flags$own = str);
    };
    return;
  }
  flagExt$(str) {
    return this.flagSync$(this.flags$ext = str);
  }
  flagSelf$(str) {
    this.flagDeopt$();
    return this.flagSelf$(str);
  }
  flagSync$() {
    return this.className = (this.flags$ns || "") + (this.flags$ext || "") + " " + (this.flags$own || "") + " " + (this.$flags || "");
  }
  set$(key, value) {
    let desc = getDeepPropertyDescriptor(this, key, Element);
    if (!desc || !desc.set) {
      this.setAttribute(key, value);
    } else {
      this[key] = value;
    }
    ;
    return;
  }
};
Element[\u03A8__init__3]();
Element.prototype.setns$ = Element.prototype.setAttributeNS;
var DocumentFragment = class extends Element {
  static [\u03A8__init__3]() {
    this.prototype[\u03A8__initor__5] = \u03C65;
    return this;
  }
  constructor() {
    super(null);
    this[\u03A8__initor__5] === \u03C65 && this[\u03A8__inited__5] && this[\u03A8__inited__5]();
  }
  get outerHTML() {
    return this.innerHTML;
  }
};
DocumentFragment[\u03A8__init__3]();
var HTMLElement = class extends Element {
};
var HTMLHtmlElement = class extends HTMLElement {
  get scripts() {
    return this[\u03A8scripts] || (this[\u03A8scripts] = []);
  }
  get outerHTML() {
    let prev = HtmlContext;
    HtmlContext = this;
    let html = super.outerHTML;
    let sheets = new Set();
    let jsassets = [];
    let inject = [];
    if (process.env.IMBA_HMR || globalThis.IMBA_HMR) {
      inject.push("<script src='/__hmr__.js'></script>");
    }
    ;
    if (!this.styles) {
      for (let i\u03C64 = 0, items\u03C62 = iter$__4(this.scripts), len\u03C62 = items\u03C62.length; i\u03C64 < len\u03C62; i\u03C64++) {
        let script = items\u03C62[i\u03C64];
        let src = script.src;
        let asset = manifest.urls[src];
        if (asset && asset.css) {
          sheets.add(asset.css);
        }
        ;
      }
      ;
      for (let sheet of iter$__4(sheets)) {
        inject.push("<link rel='stylesheet' href='" + sheet.url + "'>");
      }
      ;
    }
    ;
    HtmlContext = prev;
    if (inject.length) {
      let pos = html.indexOf("</head>");
      if (pos == -1) {
        pos = html.indexOf("<body>");
      }
      ;
      if (pos == -1) {
        pos = 0;
      }
      ;
      html = html.slice(0, pos) + "\n" + inject.join("\n") + "\n" + html.slice(pos);
    }
    ;
    return "<!DOCTYPE html>" + html;
  }
};
var HTMLSelectElement = class extends HTMLElement {
};
var HTMLInputElement = class extends HTMLElement {
};
var HTMLTextAreaElement = class extends HTMLElement {
};
var HTMLButtonElement = class extends HTMLElement {
};
var HTMLOptionElement = class extends HTMLElement {
};
var HTMLScriptElement = class extends HTMLElement {
  get outerHTML() {
    if (HtmlContext) {
      (HtmlContext.scripts || (HtmlContext.scripts = [])).push(this);
    }
    ;
    if (this[\u03A8asset]) {
      if (this[\u03A8asset].js) {
        this.setAttribute("src", this[\u03A8asset].js.url);
        this.setAttribute("type", "module");
      } else {
        console.warn("could not find browser entrypoint for " + this[\u03A8asset].path);
      }
      ;
    }
    ;
    return super.outerHTML;
  }
};
var HTMLLinkElement = class extends HTMLElement {
  get outerHTML() {
    if (this[\u03A8asset]) {
      let rel = this.getAttribute("rel");
      let href;
      if (rel == "stylesheet") {
        if (!(href = this[\u03A8asset].css.url)) {
          console.warn("could not find stylesheet for " + this[\u03A8asset].path);
        }
        ;
      }
      ;
      if (href) {
        this.setAttribute("href", href);
      }
      ;
    }
    ;
    return super.outerHTML;
  }
};
var HTMLStyleElement = class extends HTMLElement {
  set src(value) {
    if (this[\u03A8src] != value ? (this[\u03A8src] = value, true) : false) {
      true;
    }
    ;
    return;
  }
  get src() {
    return this[\u03A8src];
  }
  get outerHTML() {
    if (HtmlContext && this.src) {
      (HtmlContext.styles || (HtmlContext.styles = [])).push(this);
    }
    ;
    if (this.src) {
      this.nodeName = "link";
      this.setAttribute("rel", "stylesheet");
      this.setAttribute("href", String(this.src));
      let out = super.outerHTML;
      this.nodeName = "style";
      return out;
    }
    ;
    return super.outerHTML;
  }
};
var descriptorCache = {};
function getDescriptor(item, key, cache) {
  if (!item) {
    return cache[key] = null;
  }
  ;
  if (cache[key] !== void 0) {
    return cache[key];
  }
  ;
  let desc = Object.getOwnPropertyDescriptor(item, key);
  if (desc !== void 0 || item == SVGElement) {
    return cache[key] = desc || null;
  }
  ;
  return getDescriptor(Reflect.getPrototypeOf(item), key, cache);
}
var SVGElement = class extends Element {
  set$(key, value) {
    var \u03C68;
    let cache = descriptorCache[\u03C68 = this.nodeName] || (descriptorCache[\u03C68] = {});
    let desc = getDescriptor(this, key, cache);
    if (!desc || !desc.set) {
      this.setAttribute(key, value);
    } else {
      this[key] = value;
    }
    ;
    return;
  }
};
var SVGSVGElement = class extends SVGElement {
  set src(value) {
    if (this[\u03A8src] != value ? (this[\u03A8src] = value, true) : false) {
      if (value && value.adoptNode) {
        value.adoptNode(this);
      }
      ;
    }
    ;
    return;
  }
};
TYPES[""].klass = Element;
TYPES.HTML.klass = HTMLElement;
TYPES.SVG.klass = SVGElement;
MAP.html.klass = HTMLHtmlElement;
MAP.select.klass = HTMLSelectElement;
MAP.input.klass = HTMLInputElement;
MAP.textarea.klass = HTMLTextAreaElement;
MAP.button.klass = HTMLButtonElement;
MAP.option.klass = HTMLOptionElement;
MAP.script.klass = HTMLScriptElement;
MAP.style.klass = HTMLStyleElement;
MAP.link.klass = HTMLLinkElement;
MAP.svg_svg.klass = SVGSVGElement;
getTagType("");
getTagType("HTML");
getTagType("SVG");
function createElement(name, parent, flags, text) {
  let el = doc.createElement(name);
  if (flags) {
    el.className = flags;
  }
  ;
  if (text !== null) {
    el.text$(text);
  }
  ;
  if (parent && parent[\u03A8appendChild]) {
    parent[\u03A8appendChild](el);
  }
  ;
  return el;
}
function createComment(text) {
  return doc.createComment(text);
}
function createTextNode(text) {
  return doc.createTextNode(text);
}
function createComponent(name, parent, flags, text, ctx) {
  let el;
  if (typeof name != "string") {
    if (name.prototype instanceof HTMLElement) {
      el = new name();
      el.nodeName = name.nodeName;
    } else if (name && name.nodeName) {
      name = name.nodeName;
    }
    ;
  }
  ;
  el || (el = doc.createElement(name));
  el[\u03A8\u03A8parent] = parent;
  el[\u03A8__init__3]();
  if (text !== null) {
    el.slot$("__").text$(text);
  }
  ;
  if (flags || el.flags$ns) {
    el.flag$(flags || "");
  }
  ;
  return el;
}
function defineTag(name, klass, options = {}) {
  TYPES[name] = CUSTOM_TYPES[name] = {
    idl: true,
    name,
    klass
  };
  let componentName = klass.nodeName = name;
  let proto = klass.prototype;
  if (name.indexOf("-") == -1) {
    componentName = klass.nodeName = "" + name + "-tag";
    CustomTagToElementNames[name] = componentName;
  }
  ;
  if (options.extends) {
    proto[\u03A8htmlNodeName] = options.extends;
  }
  ;
  let basens = proto._ns_;
  if (options.ns) {
    let ns = options.ns;
    let flags = ns + " " + ns + "_ ";
    if (basens) {
      flags += proto.flags$ns;
      ns += " " + basens;
    }
    ;
    proto._ns_ = ns;
    proto.flags$ns = flags;
  }
  ;
  return klass;
}
globalThis[\u03A8dom] = {
  Location,
  Document
};

// node_modules/imba/src/imba/dom/fragment.imba
function iter$__5(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var \u03A8__initor__6 = Symbol.for("#__initor__");
var \u03A8__inited__6 = Symbol.for("#__inited__");
var \u03A8parent2 = Symbol.for("#parent");
var \u03A8appendChild2 = Symbol.for("#appendChild");
var \u03A8removeChild2 = Symbol.for("#removeChild");
var \u03A8insertInto2 = Symbol.for("#insertInto");
var \u03A8replaceWith2 = Symbol.for("#replaceWith");
var \u03A8insertChild2 = Symbol.for("#insertChild");
var \u03A8removeFrom2 = Symbol.for("#removeFrom");
var \u03A8placeChild2 = Symbol.for("#placeChild");
var \u03A8__init__4 = Symbol.for("#__init__");
var \u03A8\u03A8up2 = Symbol.for("##up");
var \u03A8domFlags = Symbol.for("#domFlags");
var \u03A8end = Symbol.for("#end");
var \u03A8\u03A8parent2 = Symbol.for("##parent");
var \u03A8textContent = Symbol.for("#textContent");
var \u03A8textNode = Symbol.for("#textNode");
var \u03C66 = Symbol();
var Fragment = class {
  constructor() {
    this.childNodes = [];
  }
  log(...params) {
    return;
    return console.log(this.constructor.name, ...params);
  }
  hasChildNodes() {
    return false;
  }
};
var counter = 0;
var VirtualFragment = class extends Fragment {
  static [\u03A8__init__4]() {
    this.prototype[\u03A8__initor__6] = \u03C66;
    return this;
  }
  constructor(flags, parent) {
    super(...arguments);
    this[\u03A8\u03A8up2] = parent;
    this.parentNode = null;
    this[\u03A8domFlags] = flags;
    this.childNodes = [];
    this[\u03A8end] = createComment("slot" + counter++);
    if (parent) {
      parent[\u03A8appendChild2](this);
    }
    ;
    this[\u03A8__initor__6] === \u03C66 && this[\u03A8__inited__6] && this[\u03A8__inited__6]();
  }
  get [\u03A8parent2]() {
    return this[\u03A8\u03A8parent2] || this.parentNode || this[\u03A8\u03A8up2];
  }
  set textContent(text) {
    this[\u03A8textContent] = text;
  }
  get textContent() {
    return this[\u03A8textContent];
  }
  hasChildNodes() {
    for (let i\u03C6 = 0, items\u03C6 = iter$__5(this.childNodes), len\u03C6 = items\u03C6.length; i\u03C6 < len\u03C6; i\u03C6++) {
      let item = items\u03C6[i\u03C6];
      if (item instanceof Fragment) {
        if (item.hasChildNodes()) {
          return true;
        }
        ;
      }
      ;
      if (item instanceof Comment) {
        true;
      } else if (item instanceof Node) {
        return true;
      }
      ;
    }
    ;
    return false;
  }
  text$(item) {
    if (!this[\u03A8textNode]) {
      this[\u03A8textNode] = this[\u03A8placeChild2](item);
    } else {
      this[\u03A8textNode].textContent = item;
    }
    ;
    return this[\u03A8textNode];
  }
  appendChild(child) {
    if (this.parentNode) {
      child[\u03A8insertInto2](this.parentNode, this[\u03A8end]);
    }
    ;
    return this.childNodes.push(child);
  }
  [\u03A8appendChild2](child) {
    if (this.parentNode) {
      child[\u03A8insertInto2](this.parentNode, this[\u03A8end]);
    }
    ;
    return this.childNodes.push(child);
  }
  insertBefore(node, refnode) {
    if (this.parentNode) {
      this.parentNode[\u03A8insertChild2](node, refnode);
    }
    ;
    let idx = this.childNodes.indexOf(refnode);
    if (idx >= 0) {
      this.childNodes.splice(idx, 0, node);
    }
    ;
    return node;
  }
  [\u03A8removeChild2](node) {
    if (this.parentNode) {
      this.parentNode[\u03A8removeChild2](node);
    }
    ;
    let idx = this.childNodes.indexOf(node);
    if (idx >= 0) {
      this.childNodes.splice(idx, 1);
    }
    ;
    return;
  }
  [\u03A8insertInto2](parent, before) {
    let prev = this.parentNode;
    if (this.parentNode != parent ? (this.parentNode = parent, true) : false) {
      if (this[\u03A8end]) {
        before = this[\u03A8end][\u03A8insertInto2](parent, before);
      }
      ;
      for (let i\u03C62 = 0, items\u03C62 = iter$__5(this.childNodes), len\u03C62 = items\u03C62.length; i\u03C62 < len\u03C62; i\u03C62++) {
        let item = items\u03C62[i\u03C62];
        item[\u03A8insertInto2](parent, before);
      }
      ;
    }
    ;
    return this;
  }
  [\u03A8replaceWith2](node, parent) {
    let res = node[\u03A8insertInto2](parent, this[\u03A8end]);
    this[\u03A8removeFrom2](parent);
    return res;
  }
  [\u03A8insertChild2](node, refnode) {
    if (this.parentNode) {
      this.insertBefore(node, refnode || this[\u03A8end]);
    }
    ;
    if (refnode) {
      let idx = this.childNodes.indexOf(refnode);
      if (idx >= 0) {
        this.childNodes.splice(idx, 0, node);
      }
      ;
    } else {
      this.childNodes.push(node);
    }
    ;
    return node;
  }
  [\u03A8removeFrom2](parent) {
    for (let i\u03C63 = 0, items\u03C63 = iter$__5(this.childNodes), len\u03C63 = items\u03C63.length; i\u03C63 < len\u03C63; i\u03C63++) {
      let item = items\u03C63[i\u03C63];
      item[\u03A8removeFrom2](parent);
    }
    ;
    if (this[\u03A8end]) {
      this[\u03A8end][\u03A8removeFrom2](parent);
    }
    ;
    this.parentNode = null;
    return this;
  }
  [\u03A8placeChild2](item, f, prev) {
    let par = this.parentNode;
    let type = typeof item;
    if (type === "undefined" || item === null) {
      if (prev && prev instanceof Comment) {
        return prev;
      }
      ;
      let el = createComment("");
      if (prev) {
        let idx = this.childNodes.indexOf(prev);
        this.childNodes.splice(idx, 1, el);
        if (par) {
          prev[\u03A8replaceWith2](el, par);
        }
        ;
        return el;
      }
      ;
      this.childNodes.push(el);
      if (par) {
        el[\u03A8insertInto2](par, this[\u03A8end]);
      }
      ;
      return el;
    }
    ;
    if (item === prev) {
      return item;
    }
    ;
    if (type !== "object") {
      let res;
      let txt = item;
      if (prev) {
        if (prev instanceof Text) {
          prev.textContent = txt;
          return prev;
        } else {
          res = createTextNode(txt);
          let idx = this.childNodes.indexOf(prev);
          this.childNodes.splice(idx, 1, res);
          if (par) {
            prev[\u03A8replaceWith2](res, par);
          }
          ;
          return res;
        }
        ;
      } else {
        this.childNodes.push(res = createTextNode(txt));
        if (par) {
          res[\u03A8insertInto2](par, this[\u03A8end]);
        }
        ;
        return res;
      }
      ;
    } else if (prev) {
      let idx = this.childNodes.indexOf(prev);
      this.childNodes.splice(idx, 1, item);
      if (par) {
        prev[\u03A8replaceWith2](item, par);
      }
      ;
      return item;
    } else {
      this.childNodes.push(item);
      if (par) {
        item[\u03A8insertInto2](par, this[\u03A8end]);
      }
      ;
      return item;
    }
    ;
  }
};
VirtualFragment[\u03A8__init__4]();
function createSlot(bitflags, par) {
  const el = new VirtualFragment(bitflags, null);
  el[\u03A8\u03A8up2] = par;
  return el;
}

// node_modules/imba/src/imba/dom/component.imba
function iter$__6(a) {
  let v;
  return a ? (v = a.toIterable) ? v.call(a) : a : [];
}
var \u03A8__init__5 = Symbol.for("#__init__");
var \u03A8__initor__7 = Symbol.for("#__initor__");
var \u03A8__inited__7 = Symbol.for("#__inited__");
var \u03A8afterVisit2 = Symbol.for("#afterVisit");
var \u03A8beforeReconcile2 = Symbol.for("#beforeReconcile");
var \u03A8count = Symbol.for("#count");
var \u03A8autorender = Symbol.for("#autorender");
var \u03C67 = Symbol();
var hydrator = new class {
  constructor($$ = null) {
    this[\u03A8__init__5]($$);
  }
  [\u03A8__init__5]($$ = null) {
    var v\u03C6;
    this.items = $$ && (v\u03C6 = $$.items) !== void 0 ? v\u03C6 : [];
    this.current = $$ && (v\u03C6 = $$.current) !== void 0 ? v\u03C6 : null;
    this.lastQueued = $$ && (v\u03C6 = $$.lastQueued) !== void 0 ? v\u03C6 : null;
    this.tests = $$ && (v\u03C6 = $$.tests) !== void 0 ? v\u03C6 : 0;
  }
  flush() {
    let item = null;
    if (false) {
    }
    ;
    while (item = this.items.shift()) {
      if (!item.parentNode || item.hydrated\u03A6) {
        continue;
      }
      ;
      let prev = this.current;
      this.current = item;
      item.__F |= 1024;
      item.connectedCallback();
      this.current = prev;
    }
    ;
    return;
  }
  queue(item) {
    var self = this;
    let len = this.items.length;
    let idx = 0;
    let prev = this.lastQueued;
    this.lastQueued = item;
    let BEFORE = Node2.DOCUMENT_POSITION_PRECEDING;
    let AFTER = Node2.DOCUMENT_POSITION_FOLLOWING;
    if (len) {
      let prevIndex = this.items.indexOf(prev);
      let index = prevIndex;
      let compare = function(a, b) {
        self.tests++;
        return a.compareDocumentPosition(b);
      };
      if (prevIndex == -1 || prev.nodeName != item.nodeName) {
        index = prevIndex = 0;
      }
      ;
      let curr = self.items[index];
      while (curr && compare(curr, item) & AFTER) {
        curr = self.items[++index];
      }
      ;
      if (index != prevIndex) {
        curr ? self.items.splice(index, 0, item) : self.items.push(item);
      } else {
        while (curr && compare(curr, item) & BEFORE) {
          curr = self.items[--index];
        }
        ;
        if (index != prevIndex) {
          curr ? self.items.splice(index + 1, 0, item) : self.items.unshift(item);
        }
        ;
      }
      ;
    } else {
      self.items.push(item);
      if (!self.current) {
        globalThis.queueMicrotask(self.flush.bind(self));
      }
      ;
    }
    ;
    return;
  }
  run(item) {
    var \u03C632, \u03C623;
    if (this.active) {
      return;
    }
    ;
    this.active = true;
    let all = globalThis.document.querySelectorAll(".__ssr");
    console.log("running hydrator", item, all.length, Array.from(all));
    for (let i\u03C6 = 0, items\u03C6 = iter$__6(all), len\u03C6 = items\u03C6.length; i\u03C6 < len\u03C6; i\u03C6++) {
      let item2 = items\u03C6[i\u03C6];
      item2[\u03A8count] || (item2[\u03A8count] = 1);
      item2[\u03A8count]++;
      let name = item2.nodeName;
      let typ = (\u03C623 = this.map)[name] || (\u03C623[name] = globalThis.window.customElements.get(name.toLowerCase()) || HTMLElement);
      console.log("item type", name, typ, !!CUSTOM_TYPES[name.toLowerCase()]);
      if (!item2.connectedCallback || !item2.parentNode || item2.hydrated\u03A6) {
        continue;
      }
      ;
      console.log("hydrate", item2);
    }
    ;
    return this.active = false;
  }
}();
var ImbaElement = class extends HTMLElement {
  static [\u03A8__init__5]() {
    this.prototype[\u03A8__initor__7] = \u03C67;
    return this;
  }
  constructor() {
    super();
    if (this.flags$ns) {
      this.flag$ = this.flagExt$;
    }
    ;
    this.setup$();
    this.build();
    this[\u03A8__initor__7] === \u03C67 && this[\u03A8__inited__7] && this[\u03A8__inited__7]();
  }
  setup$() {
    this.__slots = {};
    return this.__F = 0;
  }
  [\u03A8__init__5]() {
    this.__F |= 1 | 2;
    return this;
  }
  flag$(str) {
    this.className = this.flags$ext = str;
    return;
  }
  slot$(name, ctx) {
    var \u03C642;
    if (name == "__" && !this.render) {
      return this;
    }
    ;
    return (\u03C642 = this.__slots)[name] || (\u03C642[name] = createSlot(0, this));
  }
  build() {
    return this;
  }
  awaken() {
    return this;
  }
  mount() {
    return this;
  }
  unmount() {
    return this;
  }
  rendered() {
    return this;
  }
  dehydrate() {
    return this;
  }
  hydrate() {
    this.autoschedule = true;
    return this;
  }
  tick() {
    return this.commit();
  }
  visit() {
    return this.commit();
  }
  commit() {
    if (!this.render\u03A6) {
      this.__F |= 8192;
      return this;
    }
    ;
    this.__F |= 256;
    this.render && this.render();
    this.rendered();
    return this.__F = (this.__F | 512) & ~256 & ~8192;
  }
  get autoschedule() {
    return (this.__F & 64) != 0;
  }
  set autoschedule(value) {
    value ? this.__F |= 64 : this.__F &= ~64;
  }
  set autorender(value) {
    let o = this[\u03A8autorender] || (this[\u03A8autorender] = {});
    o.value = value;
    if (this.mounted\u03A6) {
      scheduler.schedule(this, o);
    }
    ;
    return;
  }
  get render\u03A6() {
    return !this.suspended\u03A6;
  }
  get mounting\u03A6() {
    return (this.__F & 16) != 0;
  }
  get mounted\u03A6() {
    return (this.__F & 32) != 0;
  }
  get awakened\u03A6() {
    return (this.__F & 8) != 0;
  }
  get rendered\u03A6() {
    return (this.__F & 512) != 0;
  }
  get suspended\u03A6() {
    return (this.__F & 4096) != 0;
  }
  get rendering\u03A6() {
    return (this.__F & 256) != 0;
  }
  get scheduled\u03A6() {
    return (this.__F & 128) != 0;
  }
  get hydrated\u03A6() {
    return (this.__F & 2) != 0;
  }
  get ssr\u03A6() {
    return (this.__F & 1024) != 0;
  }
  schedule() {
    scheduler.on("commit", this);
    this.__F |= 128;
    return this;
  }
  unschedule() {
    scheduler.un("commit", this);
    this.__F &= ~128;
    return this;
  }
  async suspend(cb = null) {
    let val = this.flags.incr("_suspended_");
    this.__F |= 4096;
    if (cb instanceof Function) {
      await cb();
      this.unsuspend();
    }
    ;
    return this;
  }
  unsuspend() {
    let val = this.flags.decr("_suspended_");
    if (val == 0) {
      this.__F &= ~4096;
      this.commit();
      ;
    }
    ;
    return this;
  }
  [\u03A8afterVisit2]() {
    return this.visit();
  }
  [\u03A8beforeReconcile2]() {
    if (this.__F & 1024) {
      this.__F = this.__F & ~1024;
      this.classList.remove("_ssr_");
      if (this.flags$ext && this.flags$ext.indexOf("_ssr_") == 0) {
        this.flags$ext = this.flags$ext.slice(5);
      }
      ;
      if (!(this.__F & 512)) {
        this.innerHTML = "";
      }
      ;
    }
    ;
    return this;
  }
  connectedCallback() {
    let flags = this.__F;
    let inited = flags & 1;
    let awakened = flags & 8;
    if (!inited && !(flags & 1024)) {
      hydrator.queue(this);
      return;
    }
    ;
    if (flags & (16 | 32)) {
      return;
    }
    ;
    this.__F |= 16;
    if (!inited) {
      this[\u03A8__init__5]();
    }
    ;
    if (!(flags & 2)) {
      this.flags$ext = this.className;
      this.__F |= 2;
      this.hydrate();
      this.commit();
    }
    ;
    if (!awakened) {
      this.awaken();
      this.__F |= 8;
    }
    ;
    let res = this.mount();
    if (res && res.then instanceof Function) {
      res.then(scheduler.commit);
    }
    ;
    flags = this.__F = (this.__F | 32) & ~16;
    if (flags & 64) {
      this.schedule();
    }
    ;
    if (this[\u03A8autorender]) {
      scheduler.schedule(this, this[\u03A8autorender]);
    }
    ;
    return this;
  }
  disconnectedCallback() {
    this.__F = this.__F & (~32 & ~16);
    if (this.__F & 128) {
      this.unschedule();
    }
    ;
    this.unmount();
    if (this[\u03A8autorender]) {
      return scheduler.unschedule(this, this[\u03A8autorender]);
    }
    ;
  }
};
ImbaElement[\u03A8__init__5]();

// node_modules/imba/src/imba/dom/context.imba
var renderContext = {
  context: null
};

// resources/views/email/vendor/ActionComponent.imba
var \u03A8__init__6 = Symbol.for("#__init__");
var \u03A8beforeReconcile3 = Symbol.for("#beforeReconcile");
var \u03A8placeChild3 = Symbol.for("#placeChild");
var \u03A8afterReconcile2 = Symbol.for("#afterReconcile");
var \u03B5self = Symbol();
var \u03B5a = Symbol();
var aq\u03C6 = Symbol();
var \u03B5slot = Symbol();
var ActionComponent = class extends ImbaElement {
  [\u03A8__init__6]($$ = null) {
    super[\u03A8__init__6](...arguments);
    this.url = $$ ? $$.url : void 0;
  }
  render() {
    var \u03C4self, \u03B9self, \u0394self, \u03C68 = this._ns_ || "", \u03C4table, \u03C4tbody, \u03C4tr, \u03C4td, \u03C4table2, \u03C4tbody2, \u03C4tr2, \u03C4td2, \u03C4a, \u03B9a, \u0394a, \u03C5a, \u03C4slot;
    \u03C4self = this;
    \u03C4self[\u03A8beforeReconcile3]();
    (\u03B9self = \u0394self = 1, \u03C4self[\u03B5self] === 1) || (\u03B9self = \u0394self = 0, \u03C4self[\u03B5self] = 1);
    (!\u03B9self || \u0394self & 2) && \u03C4self.flagSelf$("w-af");
    \u03B9self || (\u03C4table = createElement("table", \u03C4self, `w-ag ${\u03C68}`, null));
    \u03B9self || (\u03C4table.border = "0");
    \u03B9self || (\u03C4table.cellpadding = "0");
    \u03B9self || (\u03C4table.cellspacing = "0");
    \u03B9self || (\u03C4table.class = "btn btn-primary");
    \u03B9self || \u03C4table.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; box-sizing: border-box;");
    \u03B9self || (\u03C4tbody = createElement("tbody", \u03C4table, `w-ah ${\u03C68}`, null));
    \u03B9self || (\u03C4tr = createElement("tr", \u03C4tbody, `w-ai ${\u03C68}`, null));
    \u03B9self || (\u03C4td = createElement("td", \u03C4tr, `w-aj ${\u03C68}`, null));
    \u03B9self || (\u03C4td.align = "left");
    \u03B9self || \u03C4td.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top; padding-bottom: 15px;");
    \u03B9self || (\u03C4table2 = createElement("table", \u03C4td, `w-ak ${\u03C68}`, null));
    \u03B9self || (\u03C4table2.border = "0");
    \u03B9self || (\u03C4table2.cellpadding = "0");
    \u03B9self || (\u03C4table2.cellspacing = "0");
    \u03B9self || \u03C4table2.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;");
    \u03B9self || (\u03C4tbody2 = createElement("tbody", \u03C4table2, `w-al ${\u03C68}`, null));
    \u03B9self || (\u03C4tr2 = createElement("tr", \u03C4tbody2, `w-am ${\u03C68}`, null));
    \u03B9self || (\u03C4td2 = createElement("td", \u03C4tr2, `w-an ${\u03C68}`, null));
    \u03B9self || \u03C4td2.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top; background-color: #3498db; border-radius: 5px; text-align: center;");
    (\u03B9a = \u0394a = 1, \u03C4a = \u03C4self[\u03B5a]) || (\u03B9a = \u0394a = 0, \u03C4self[\u03B5a] = \u03C4a = createElement("a", \u03C4td2, `w-ao ${\u03C68}`, null));
    \u03C5a = this.url, \u03C5a === \u03C4self[aq\u03C6] || (\u03C4a.href = \u03C4self[aq\u03C6] = \u03C5a);
    \u03B9a || (\u03C4a.target = "_blank");
    \u03B9a || \u03C4a.setAttribute("style", "display: inline-block; color: #ffffff; background-color: #3498db; border: solid 1px #3498db; border-radius: 5px; box-sizing: border-box; cursor: pointer; text-decoration: none; font-size: 14px; font-weight: bold; margin: 0; padding: 12px 25px; text-transform: capitalize; border-color: #3498db;");
    \u03C4slot = \u03C4self.__slots.__;
    \u03C4self[\u03B5slot] = \u03C4a[\u03A8placeChild3](\u03C4slot, 384, \u03C4self[\u03B5slot]);
    \u03C4self[\u03A8afterReconcile2](\u0394self);
    return \u03C4self;
  }
};
defineTag("action-component-w-aq", ActionComponent, {});

// resources/views/email/vendor/ContentComponent.imba
var \u03A8beforeReconcile4 = Symbol.for("#beforeReconcile");
var \u03A8placeChild4 = Symbol.for("#placeChild");
var \u03A8afterReconcile3 = Symbol.for("#afterReconcile");
var \u03B5self2 = Symbol();
var \u03B5td = Symbol();
var \u03B5slot2 = Symbol();
var ContentComponent = class extends ImbaElement {
  render() {
    var \u03C4self, \u03B9self, \u0394self, \u03C68 = this._ns_ || "", \u03C4tr, \u03C4td, \u03B9td, \u0394td, \u03C4slot;
    \u03C4self = this;
    \u03C4self[\u03A8beforeReconcile4]();
    (\u03B9self = \u0394self = 1, \u03C4self[\u03B5self2] === 1) || (\u03B9self = \u0394self = 0, \u03C4self[\u03B5self2] = 1);
    (!\u03B9self || \u0394self & 2) && \u03C4self.flagSelf$("x-af");
    \u03B9self || (\u03C4tr = createElement("tr", \u03C4self, `x-ag ${\u03C68}`, null));
    (\u03B9td = \u0394td = 1, \u03C4td = \u03C4self[\u03B5td]) || (\u03B9td = \u0394td = 0, \u03C4self[\u03B5td] = \u03C4td = createElement("td", \u03C4tr, `x-ah ${\u03C68}`, null));
    \u03B9td || (\u03C4td.class = "content-block");
    \u03B9td || \u03C4td.setAttribute("style", "font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 10px; font-size: 12px; color: #999999; text-align: center;");
    \u03C4slot = \u03C4self.__slots.__;
    \u03C4self[\u03B5slot2] = \u03C4td[\u03A8placeChild4](\u03C4slot, 384, \u03C4self[\u03B5slot2]);
    \u03C4self[\u03A8afterReconcile3](\u0394self);
    return \u03C4self;
  }
};
defineTag("content-component-x-aj", ContentComponent, {});

// app/Mail/VerifyEmail.imba
var import_framework3 = __toModule(require("@formidablejs/framework"));

// resources/views/email/vendor/LayoutComponent.imba
var import_framework2 = __toModule(require("@formidablejs/framework"));
var \u03A8beforeReconcile5 = Symbol.for("#beforeReconcile");
var \u03A8placeChild5 = Symbol.for("#placeChild");
var \u03A8afterReconcile4 = Symbol.for("#afterReconcile");
var \u03B5self3 = Symbol();
var \u03B5table = Symbol();
var \u03B5slot3 = Symbol();
var \u03B5td2 = Symbol();
var \u03B5slot22 = Symbol();
var \u03B5table2 = Symbol();
var \u03B5slot32 = Symbol();
var \u03B5p = Symbol();
var \u03B5i = Symbol();
var \u03B5 = Symbol();
var \u03B5i2 = Symbol();
var \u03B5$ = Symbol();
var \u03B52 = Symbol();
var LayoutComponent = class extends ImbaElement {
  render() {
    var \u03C4self, \u03B9self, \u0394self, \u03C68 = this._ns_ || "", \u03C4body, \u03C4div, \u03C4table, \u03C4tr, \u03C4td, \u03C4td2, \u03C4div2, \u03C4div3, \u03C4table2, \u03B9table, \u0394table, \u03C4slot, \u03C4table3, \u03C4tr2, \u03C4td3, \u03C4table4, \u03C4tr3, \u03C4td4, \u03B9td, \u0394td, \u03C4slot2, \u03C4div4, \u03C4table5, \u03B9table2, \u0394table2, \u03C4slot3, \u03C4tr4, \u03C4td5, \u03C4p, \u03C5p;
    \u03C4self = this;
    \u03C4self[\u03A8beforeReconcile5]();
    (\u03B9self = \u0394self = 1, \u03C4self[\u03B5self3] === 1) || (\u03B9self = \u0394self = 0, \u03C4self[\u03B5self3] = 1);
    (!\u03B9self || \u0394self & 2) && \u03C4self.flagSelf$("y-af");
    \u03B9self || (\u03C4body = createElement("body", \u03C4self, `y-ag ${\u03C68}`, null));
    \u03B9self || \u03C4body.setAttribute("style", "margin: 0");
    \u03B9self || (\u03C4div = createElement("div", \u03C4body, `y-ah ${\u03C68}`, null));
    \u03B9self || \u03C4div.setAttribute("style", "background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;");
    \u03B9self || (\u03C4table = createElement("table", \u03C4div, `y-ai ${\u03C68}`, null));
    \u03B9self || (\u03C4table.border = "0");
    \u03B9self || (\u03C4table.cellpadding = "0");
    \u03B9self || (\u03C4table.cellspacing = "0");
    \u03B9self || (\u03C4table.class = "body");
    \u03B9self || \u03C4table.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background-color: #f6f6f6");
    \u03B9self || (\u03C4tr = createElement("tr", \u03C4table, `y-aj ${\u03C68}`, null));
    \u03B9self || (\u03C4td = createElement("td", \u03C4tr, `y-ak ${\u03C68}`, "&nbsp;"));
    \u03B9self || \u03C4td.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top;");
    \u03B9self || (\u03C4td2 = createElement("td", \u03C4tr, `y-al ${\u03C68}`, null));
    \u03B9self || (\u03C4td2.class = "container");
    \u03B9self || \u03C4td2.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top; display: block; Margin: 0 auto; max-width: 580px; padding: 10px; width: 580px");
    \u03B9self || (\u03C4div2 = createElement("div", \u03C4td2, `y-am ${\u03C68}`, null));
    \u03B9self || (\u03C4div2.class = "content");
    \u03B9self || \u03C4div2.setAttribute("style", "box-sizing: border-box; display: block; Margin: 0 auto; max-width: 580px; padding: 10px");
    \u03B9self || (\u03C4div3 = createElement("div", \u03C4div2, `y-an ${\u03C68}`, null));
    \u03B9self || \u03C4div3.setAttribute("style", "clear: both; text-align: center; width: 100%;");
    (\u03B9table = \u0394table = 1, \u03C4table2 = \u03C4self[\u03B5table]) || (\u03B9table = \u0394table = 0, \u03C4self[\u03B5table] = \u03C4table2 = createElement("table", \u03C4div3, `y-ao ${\u03C68}`, null));
    \u03B9table || (\u03C4table2.border = "0");
    \u03B9table || (\u03C4table2.cellpadding = "0");
    \u03B9table || (\u03C4table2.cellspacing = "0");
    \u03B9table || \u03C4table2.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;");
    \u03C4slot = \u03C4self.__slots.header;
    \u03C4self[\u03B5slot3] = \u03C4table2[\u03A8placeChild5](\u03C4slot, 384, \u03C4self[\u03B5slot3]);
    \u03B9self || (\u03C4table3 = createElement("table", \u03C4div2, `y-aq ${\u03C68}`, null));
    \u03B9self || (\u03C4table3.class = "main");
    \u03B9self || \u03C4table3.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%; background: #ffffff; border-radius: 3px;");
    \u03B9self || (\u03C4tr2 = createElement("tr", \u03C4table3, `y-ar ${\u03C68}`, null));
    \u03B9self || (\u03C4td3 = createElement("td", \u03C4tr2, `y-as ${\u03C68}`, null));
    \u03B9self || (\u03C4td3.class = "wrapper");
    \u03B9self || \u03C4td3.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top; box-sizing: border-box; padding: 20px;");
    \u03B9self || (\u03C4table4 = createElement("table", \u03C4td3, `y-at ${\u03C68}`, null));
    \u03B9self || (\u03C4table4.border = "0");
    \u03B9self || (\u03C4table4.cellpadding = "0");
    \u03B9self || (\u03C4table4.cellspacing = "0");
    \u03B9self || \u03C4table4.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;");
    \u03B9self || (\u03C4tr3 = createElement("tr", \u03C4table4, `y-au ${\u03C68}`, null));
    (\u03B9td = \u0394td = 1, \u03C4td4 = \u03C4self[\u03B5td2]) || (\u03B9td = \u0394td = 0, \u03C4self[\u03B5td2] = \u03C4td4 = createElement("td", \u03C4tr3, `y-av ${\u03C68}`, null));
    \u03B9td || \u03C4td4.setAttribute("style", "font-family: sans-serif; font-size: 14px; vertical-align: top;");
    \u03C4slot2 = \u03C4self.__slots.__;
    \u03C4self[\u03B5slot22] = \u03C4td4[\u03A8placeChild5](\u03C4slot2, 384, \u03C4self[\u03B5slot22]);
    \u03B9self || (\u03C4div4 = createElement("div", \u03C4div2, `y-ax ${\u03C68}`, null));
    \u03B9self || \u03C4div4.setAttribute("style", "clear: both; Margin-top: 10px; text-align: center; width: 100%;");
    (\u03B9table2 = \u0394table2 = 1, \u03C4table5 = \u03C4self[\u03B5table2]) || (\u03B9table2 = \u0394table2 = 0, \u03C4self[\u03B5table2] = \u03C4table5 = createElement("table", \u03C4div4, `y-ay ${\u03C68}`, null));
    \u03B9table2 || (\u03C4table5.border = "0");
    \u03B9table2 || (\u03C4table5.cellpadding = "0");
    \u03B9table2 || (\u03C4table5.cellspacing = "0");
    \u03B9table2 || \u03C4table5.setAttribute("style", "border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;");
    \u03C4slot3 = \u03C4self.__slots.footer;
    \u03C4self[\u03B5slot32] = \u03C4table5[\u03A8placeChild5](\u03C4slot3, 128, \u03C4self[\u03B5slot32]);
    \u03B9table2 || (\u03C4tr4 = createElement("tr", \u03C4table5, `y-ba ${\u03C68}`, null));
    \u03B9table2 || (\u03C4td5 = createElement("td", \u03C4tr4, `y-bb ${\u03C68}`, null));
    \u03B9table2 || (\u03C4td5.class = "content-block");
    \u03B9table2 || \u03C4td5.setAttribute("style", "font-family: sans-serif; vertical-align: top; padding-bottom: 10px; padding-top: 2px; font-size: 12px; color: #999999; text-align: center;");
    (\u03C4p = \u03C4self[\u03B5p]) || (\u03C4self[\u03B5p] = \u03C4p = createElement("p", \u03C4td5, `y-bc ${\u03C68}`, null));
    \u03B9table2 || \u03C4p[\u03A8placeChild5]("&copy; ");
    \u03C5p = new Date().getFullYear(), \u03C5p === \u03C4self[\u03B5] && \u03B9table2 || (\u03C4self[\u03B5i] = \u03C4p[\u03A8placeChild5](\u03C4self[\u03B5] = \u03C5p, 0, \u03C4self[\u03B5i]));
    \u03B9table2 || \u03C4p[\u03A8placeChild5](" ");
    renderContext.context = \u03C4self[\u03B5$] || (\u03C4self[\u03B5$] = {_: \u03C4p}), \u03C5p = import_framework2.helpers.config("app.name"), renderContext.context = null, \u03C5p === \u03C4self[\u03B52] && \u03B9table2 || (\u03C4self[\u03B5i2] = \u03C4p[\u03A8placeChild5](\u03C4self[\u03B52] = \u03C5p, 0, \u03C4self[\u03B5i2]));
    \u03B9table2 || \u03C4p[\u03A8placeChild5](". All rights reserved.");
    \u03C4self[\u03A8afterReconcile4](\u0394self);
    return \u03C4self;
  }
};
defineTag("layout-component-y-bd", LayoutComponent, {});

// resources/views/email/vendor/LineComponent.imba
var \u03A8beforeReconcile6 = Symbol.for("#beforeReconcile");
var \u03A8afterReconcile5 = Symbol.for("#afterReconcile");
var \u03B5self4 = Symbol();
var LineComponent = class extends ImbaElement {
  render() {
    var \u03C4self, \u03B9self, \u0394self, \u03C68 = this._ns_ || "", \u03C4hr;
    \u03C4self = this;
    \u03C4self[\u03A8beforeReconcile6]();
    (\u03B9self = \u0394self = 1, \u03C4self[\u03B5self4] === 1) || (\u03B9self = \u0394self = 0, \u03C4self[\u03B5self4] = 1);
    (!\u03B9self || \u0394self & 2) && \u03C4self.flagSelf$("z-af");
    \u03B9self || (\u03C4hr = createElement("hr", \u03C4self, `z-ag ${\u03C68}`, null));
    \u03B9self || \u03C4hr.setAttribute("style", "background-color: #eee;height: 1px;border:none");
    \u03C4self[\u03A8afterReconcile5](\u0394self);
    return \u03C4self;
  }
};
defineTag("line-component-z-ah", LineComponent, {});

// resources/views/email/vendor/ParagraphComponent.imba
var \u03A8beforeReconcile7 = Symbol.for("#beforeReconcile");
var \u03A8placeChild6 = Symbol.for("#placeChild");
var \u03A8afterReconcile6 = Symbol.for("#afterReconcile");
var \u03B5self5 = Symbol();
var \u03B5p2 = Symbol();
var \u03B5slot4 = Symbol();
var ParagraphComponent = class extends ImbaElement {
  render() {
    var \u03C4self, \u03B9self, \u0394self, \u03C68 = this._ns_ || "", \u03C4p, \u03B9p, \u0394p, \u03C4slot;
    \u03C4self = this;
    \u03C4self[\u03A8beforeReconcile7]();
    (\u03B9self = \u0394self = 1, \u03C4self[\u03B5self5] === 1) || (\u03B9self = \u0394self = 0, \u03C4self[\u03B5self5] = 1);
    (!\u03B9self || \u0394self & 2) && \u03C4self.flagSelf$("u-af");
    (\u03B9p = \u0394p = 1, \u03C4p = \u03C4self[\u03B5p2]) || (\u03B9p = \u0394p = 0, \u03C4self[\u03B5p2] = \u03C4p = createElement("p", \u03C4self, `u-ag ${\u03C68}`, null));
    \u03B9p || \u03C4p.setAttribute("style", "font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; Margin-bottom: 15px;");
    \u03C4slot = \u03C4self.__slots.__;
    \u03C4self[\u03B5slot4] = \u03C4p[\u03A8placeChild6](\u03C4slot, 384, \u03C4self[\u03B5slot4]);
    \u03C4self[\u03A8afterReconcile6](\u0394self);
    return \u03C4self;
  }
};
defineTag("paragraph-component-u-ai", ParagraphComponent, {});

// app/Mail/VerifyEmail.imba
var import_VerifyEmail = __toModule(require("@formidablejs/framework/lib/Auth/Mail/VerifyEmail"));
var \u03B5LayoutComponent = Symbol();
var \u03B5ContentComponent = Symbol();
var \u03B5p3 = Symbol();
var \u03B5i3 = Symbol();
var \u03B5$2 = Symbol();
var \u03B53 = Symbol();
var \u03B5p22 = Symbol();
var \u03B5i22 = Symbol();
var \u03B5$22 = Symbol();
var \u03B522 = Symbol();
var \u03B5ParagraphComponent = Symbol();
var \u03B5i32 = Symbol();
var \u03B5$3 = Symbol();
var \u03B532 = Symbol();
var \u03B5ActionComponent = Symbol();
var bb\u03C6 = Symbol();
var \u03B5i4 = Symbol();
var \u03B5$4 = Symbol();
var \u03B54 = Symbol();
var \u03B5ParagraphComponent2 = Symbol();
var \u03B5i5 = Symbol();
var \u03B5$5 = Symbol();
var \u03B55 = Symbol();
var \u03B5ParagraphComponent3 = Symbol();
var \u03B5i6 = Symbol();
var \u03B5$6 = Symbol();
var \u03B56 = Symbol();
var \u03B5i7 = Symbol();
var \u03B5$7 = Symbol();
var \u03B57 = Symbol();
var \u03B5LineComponent = Symbol();
var \u03B5ParagraphComponent4 = Symbol();
var \u03B5small = Symbol();
var \u03B5i8 = Symbol();
var \u03B58 = Symbol();
var \u03B5a2 = Symbol();
var bk\u03C6 = Symbol();
var \u03B5i9 = Symbol();
var \u03B59 = Symbol();
var \u03A8\u03A8up3 = Symbol.for("##up");
var \u03A8placeChild7 = Symbol.for("#placeChild");
var \u03A8afterVisit3 = Symbol.for("#afterVisit");
var \u03A8appendChild3 = Symbol.for("#appendChild");
var VerifyEmail = class extends import_VerifyEmail.default {
  render() {
    var \u03C4LayoutComponent, \u03F2\u03C4 = renderContext.context || {}, \u03B9LayoutComponent, \u0394LayoutComponent, \u03C4atS, \u03C4auS, \u03C4ContentComponent, \u03B9ContentComponent, \u0394ContentComponent, \u03C4avS, \u03C4p, \u03B9p, \u0394p, \u03C5p, \u03C4p2, \u03B9p2, \u0394p2, \u03C5p2, \u03C4ParagraphComponent, \u03B9ParagraphComponent, \u0394ParagraphComponent, \u03C4ayS, \u03C5ParagraphComponent, \u03C4ActionComponent, \u03B9ActionComponent, \u0394ActionComponent, \u03C4baS, \u03C5ActionComponent, \u03C4ParagraphComponent2, \u03B9ParagraphComponent2, \u0394ParagraphComponent2, \u03C4bdS, \u03C5ParagraphComponent2, \u03C4ParagraphComponent3, \u03B9ParagraphComponent3, \u0394ParagraphComponent3, \u03C4bfS, \u03C5ParagraphComponent3, \u03C4br, \u03C4LineComponent, \u03B9LineComponent, \u0394LineComponent, \u03C4ParagraphComponent4, \u03B9ParagraphComponent4, \u0394ParagraphComponent4, \u03C4biS, \u03C4br2, \u03C4small, \u03B9small, \u0394small, \u03C5small, \u03C4a, \u03B9a, \u0394a, \u03C5a;
    (\u03B9LayoutComponent = \u0394LayoutComponent = 1, \u03C4LayoutComponent = \u03F2\u03C4[\u03B5LayoutComponent]) || (\u03B9LayoutComponent = \u0394LayoutComponent = 0, \u03F2\u03C4[\u03B5LayoutComponent] = \u03C4LayoutComponent = createComponent(LayoutComponent, null, "s-af", null));
    \u03B9LayoutComponent || (\u03C4LayoutComponent[\u03A8\u03A8up3] = \u03F2\u03C4._);
    \u03C4atS = \u03C4LayoutComponent.slot$("header", \u03C4LayoutComponent);
    \u03C4auS = \u03C4LayoutComponent.slot$("__", \u03C4LayoutComponent);
    (\u03B9ContentComponent = \u0394ContentComponent = 1, \u03C4ContentComponent = \u03C4LayoutComponent[\u03B5ContentComponent]) || (\u03B9ContentComponent = \u0394ContentComponent = 0, \u03C4LayoutComponent[\u03B5ContentComponent] = \u03C4ContentComponent = createComponent(ContentComponent, \u03C4atS, "s-ag", null));
    \u03C4avS = \u03C4ContentComponent.slot$("__", \u03C4LayoutComponent);
    \u03B9ContentComponent || (\u03C4ContentComponent.slot = "header");
    (\u03B9p = \u0394p = 1, \u03C4p = \u03C4LayoutComponent[\u03B5p3]) || (\u03B9p = \u0394p = 0, \u03C4LayoutComponent[\u03B5p3] = \u03C4p = createElement("p", \u03C4avS, "s-ah", null));
    \u03B9p || \u03C4p.setAttribute("style", "font-size: 20px; margin-bottom: 20px; font-weight: bold;");
    renderContext.context = \u03C4LayoutComponent[\u03B5$2] || (\u03C4LayoutComponent[\u03B5$2] = {_: \u03C4p}), \u03C5p = import_framework3.helpers.config("app.name"), renderContext.context = null, \u03C5p === \u03C4LayoutComponent[\u03B53] && \u03B9p || (\u03C4LayoutComponent[\u03B5i3] = \u03C4p[\u03A8placeChild7](\u03C4LayoutComponent[\u03B53] = \u03C5p, 384, \u03C4LayoutComponent[\u03B5i3]));
    \u03B9ContentComponent || !\u03C4ContentComponent.setup || \u03C4ContentComponent.setup(\u0394ContentComponent);
    \u03C4ContentComponent[\u03A8afterVisit3](\u0394ContentComponent);
    \u03B9ContentComponent || \u03C4atS[\u03A8appendChild3](\u03C4ContentComponent);
    (\u03B9p2 = \u0394p2 = 1, \u03C4p2 = \u03C4LayoutComponent[\u03B5p22]) || (\u03B9p2 = \u0394p2 = 0, \u03C4LayoutComponent[\u03B5p22] = \u03C4p2 = createElement("p", \u03C4auS, "s-ai", null));
    \u03B9p2 || \u03C4p2.setAttribute("style", "font-weight: bold; font-size: 18px;");
    renderContext.context = \u03C4LayoutComponent[\u03B5$22] || (\u03C4LayoutComponent[\u03B5$22] = {_: \u03C4p2}), \u03C5p2 = this.request.t("auth.email.verify.greeting", "Hello!"), renderContext.context = null, \u03C5p2 === \u03C4LayoutComponent[\u03B522] && \u03B9p2 || (\u03C4LayoutComponent[\u03B5i22] = \u03C4p2[\u03A8placeChild7](\u03C4LayoutComponent[\u03B522] = \u03C5p2, 384, \u03C4LayoutComponent[\u03B5i22]));
    (\u03B9ParagraphComponent = \u0394ParagraphComponent = 1, \u03C4ParagraphComponent = \u03C4LayoutComponent[\u03B5ParagraphComponent]) || (\u03B9ParagraphComponent = \u0394ParagraphComponent = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent] = \u03C4ParagraphComponent = createComponent(ParagraphComponent, \u03C4auS, "s-aj", null));
    \u03C4ayS = \u03C4ParagraphComponent.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$3] || (\u03C4LayoutComponent[\u03B5$3] = {_: \u03C4ayS}), \u03C5ParagraphComponent = this.request.t("auth.email.verify.line", "Please click the button below to verify your email address."), renderContext.context = null, \u03C5ParagraphComponent === \u03C4LayoutComponent[\u03B532] && \u03B9ParagraphComponent || (\u03C4LayoutComponent[\u03B5i32] = \u03C4ayS[\u03A8placeChild7](\u03C4LayoutComponent[\u03B532] = \u03C5ParagraphComponent, 384, \u03C4LayoutComponent[\u03B5i32]));
    \u03B9ParagraphComponent || !\u03C4ParagraphComponent.setup || \u03C4ParagraphComponent.setup(\u0394ParagraphComponent);
    \u03C4ParagraphComponent[\u03A8afterVisit3](\u0394ParagraphComponent);
    \u03B9ParagraphComponent || \u03C4auS[\u03A8appendChild3](\u03C4ParagraphComponent);
    (\u03B9ActionComponent = \u0394ActionComponent = 1, \u03C4ActionComponent = \u03C4LayoutComponent[\u03B5ActionComponent]) || (\u03B9ActionComponent = \u0394ActionComponent = 0, \u03C4LayoutComponent[\u03B5ActionComponent] = \u03C4ActionComponent = createComponent(ActionComponent, \u03C4auS, "s-ak", null));
    \u03C4baS = \u03C4ActionComponent.slot$("__", \u03C4LayoutComponent);
    \u03C5ActionComponent = this.request.verificationUrl, \u03C5ActionComponent === \u03C4LayoutComponent[bb\u03C6] || (\u03C4ActionComponent.url = \u03C4LayoutComponent[bb\u03C6] = \u03C5ActionComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$4] || (\u03C4LayoutComponent[\u03B5$4] = {_: \u03C4baS}), \u03C5ActionComponent = this.request.t("auth.email.verify.action", "Verify Email Address"), renderContext.context = null, \u03C5ActionComponent === \u03C4LayoutComponent[\u03B54] && \u03B9ActionComponent || (\u03C4LayoutComponent[\u03B5i4] = \u03C4baS[\u03A8placeChild7](\u03C4LayoutComponent[\u03B54] = \u03C5ActionComponent, 384, \u03C4LayoutComponent[\u03B5i4]));
    \u03B9ActionComponent || !\u03C4ActionComponent.setup || \u03C4ActionComponent.setup(\u0394ActionComponent);
    \u03C4ActionComponent[\u03A8afterVisit3](\u0394ActionComponent);
    \u03B9ActionComponent || \u03C4auS[\u03A8appendChild3](\u03C4ActionComponent);
    (\u03B9ParagraphComponent2 = \u0394ParagraphComponent2 = 1, \u03C4ParagraphComponent2 = \u03C4LayoutComponent[\u03B5ParagraphComponent2]) || (\u03B9ParagraphComponent2 = \u0394ParagraphComponent2 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent2] = \u03C4ParagraphComponent2 = createComponent(ParagraphComponent, \u03C4auS, "s-al", null));
    \u03C4bdS = \u03C4ParagraphComponent2.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$5] || (\u03C4LayoutComponent[\u03B5$5] = {_: \u03C4bdS}), \u03C5ParagraphComponent2 = this.request.t("auth.email.verify.footer", "If you did not create an account, no further action is required."), renderContext.context = null, \u03C5ParagraphComponent2 === \u03C4LayoutComponent[\u03B55] && \u03B9ParagraphComponent2 || (\u03C4LayoutComponent[\u03B5i5] = \u03C4bdS[\u03A8placeChild7](\u03C4LayoutComponent[\u03B55] = \u03C5ParagraphComponent2, 384, \u03C4LayoutComponent[\u03B5i5]));
    \u03B9ParagraphComponent2 || !\u03C4ParagraphComponent2.setup || \u03C4ParagraphComponent2.setup(\u0394ParagraphComponent2);
    \u03C4ParagraphComponent2[\u03A8afterVisit3](\u0394ParagraphComponent2);
    \u03B9ParagraphComponent2 || \u03C4auS[\u03A8appendChild3](\u03C4ParagraphComponent2);
    (\u03B9ParagraphComponent3 = \u0394ParagraphComponent3 = 1, \u03C4ParagraphComponent3 = \u03C4LayoutComponent[\u03B5ParagraphComponent3]) || (\u03B9ParagraphComponent3 = \u0394ParagraphComponent3 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent3] = \u03C4ParagraphComponent3 = createComponent(ParagraphComponent, \u03C4auS, "s-am", null));
    \u03C4bfS = \u03C4ParagraphComponent3.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$6] || (\u03C4LayoutComponent[\u03B5$6] = {_: \u03C4bfS}), \u03C5ParagraphComponent3 = this.request.t("auth.email.signing", "Regards,"), renderContext.context = null, \u03C5ParagraphComponent3 === \u03C4LayoutComponent[\u03B56] && \u03B9ParagraphComponent3 || (\u03C4LayoutComponent[\u03B5i6] = \u03C4bfS[\u03A8placeChild7](\u03C4LayoutComponent[\u03B56] = \u03C5ParagraphComponent3, 128, \u03C4LayoutComponent[\u03B5i6]));
    \u03B9ParagraphComponent3 || (\u03C4br = createElement("br", \u03C4bfS, "s-an", null));
    renderContext.context = \u03C4LayoutComponent[\u03B5$7] || (\u03C4LayoutComponent[\u03B5$7] = {_: \u03C4bfS}), \u03C5ParagraphComponent3 = import_framework3.helpers.config("app.name"), renderContext.context = null, \u03C5ParagraphComponent3 === \u03C4LayoutComponent[\u03B57] && \u03B9ParagraphComponent3 || (\u03C4LayoutComponent[\u03B5i7] = \u03C4bfS[\u03A8placeChild7](\u03C4LayoutComponent[\u03B57] = \u03C5ParagraphComponent3, 256, \u03C4LayoutComponent[\u03B5i7]));
    \u03B9ParagraphComponent3 || !\u03C4ParagraphComponent3.setup || \u03C4ParagraphComponent3.setup(\u0394ParagraphComponent3);
    \u03C4ParagraphComponent3[\u03A8afterVisit3](\u0394ParagraphComponent3);
    \u03B9ParagraphComponent3 || \u03C4auS[\u03A8appendChild3](\u03C4ParagraphComponent3);
    (\u03B9LineComponent = \u0394LineComponent = 1, \u03C4LineComponent = \u03C4LayoutComponent[\u03B5LineComponent]) || (\u03B9LineComponent = \u0394LineComponent = 0, \u03C4LayoutComponent[\u03B5LineComponent] = \u03C4LineComponent = createComponent(LineComponent, \u03C4auS, "s-ao", null));
    \u03B9LineComponent || !\u03C4LineComponent.setup || \u03C4LineComponent.setup(\u0394LineComponent);
    \u03C4LineComponent[\u03A8afterVisit3](\u0394LineComponent);
    \u03B9LineComponent || \u03C4auS[\u03A8appendChild3](\u03C4LineComponent);
    (\u03B9ParagraphComponent4 = \u0394ParagraphComponent4 = 1, \u03C4ParagraphComponent4 = \u03C4LayoutComponent[\u03B5ParagraphComponent4]) || (\u03B9ParagraphComponent4 = \u0394ParagraphComponent4 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent4] = \u03C4ParagraphComponent4 = createComponent(ParagraphComponent, \u03C4auS, "s-ap", null));
    \u03C4biS = \u03C4ParagraphComponent4.slot$("__", \u03C4LayoutComponent);
    \u03B9ParagraphComponent4 || (\u03C4br2 = createElement("br", \u03C4biS, "s-aq", null));
    (\u03B9small = \u0394small = 1, \u03C4small = \u03C4LayoutComponent[\u03B5small]) || (\u03B9small = \u0394small = 0, \u03C4LayoutComponent[\u03B5small] = \u03C4small = createElement("small", \u03C4biS, "s-ar", null));
    \u03B9small || \u03C4small.setAttribute("style", "color: #777;");
    \u03C5small = this.request.t("auth.email.url", "If you are having trouble clicking the button, copy and paste the URL below into your web browser:") + " ", \u03C5small === \u03C4LayoutComponent[\u03B58] && \u03B9small || (\u03C4LayoutComponent[\u03B5i8] = \u03C4small[\u03A8placeChild7](\u03C4LayoutComponent[\u03B58] = \u03C5small, 128, \u03C4LayoutComponent[\u03B5i8]));
    (\u03B9a = \u0394a = 1, \u03C4a = \u03C4LayoutComponent[\u03B5a2]) || (\u03B9a = \u0394a = 0, \u03C4LayoutComponent[\u03B5a2] = \u03C4a = createElement("a", \u03C4small, "s-as", null));
    \u03C5a = this.request.verificationUrl, \u03C5a === \u03C4LayoutComponent[bk\u03C6] || (\u03C4a.href = \u03C4LayoutComponent[bk\u03C6] = \u03C5a);
    \u03B9a || \u03C4a.setAttribute("style", "word-break: break-all;");
    \u03C5a = this.request.verificationUrl, \u03C5a === \u03C4LayoutComponent[\u03B59] && \u03B9a || (\u03C4LayoutComponent[\u03B5i9] = \u03C4a[\u03A8placeChild7](\u03C4LayoutComponent[\u03B59] = \u03C5a, 384, \u03C4LayoutComponent[\u03B5i9]));
    \u03B9ParagraphComponent4 || !\u03C4ParagraphComponent4.setup || \u03C4ParagraphComponent4.setup(\u0394ParagraphComponent4);
    \u03C4ParagraphComponent4[\u03A8afterVisit3](\u0394ParagraphComponent4);
    \u03B9ParagraphComponent4 || \u03C4auS[\u03A8appendChild3](\u03C4ParagraphComponent4);
    \u03B9LayoutComponent || !\u03C4LayoutComponent.setup || \u03C4LayoutComponent.setup(\u0394LayoutComponent);
    \u03C4LayoutComponent[\u03A8afterVisit3](\u0394LayoutComponent);
    return \u03C4LayoutComponent;
  }
};
var VerifyEmail_default = VerifyEmail;

// app/Mail/ResetPassword.imba
var import_framework4 = __toModule(require("@formidablejs/framework"));
var import_ResetPassword = __toModule(require("@formidablejs/framework/lib/Auth/Mail/ResetPassword"));
var \u03B5LayoutComponent2 = Symbol();
var \u03B5ContentComponent2 = Symbol();
var \u03B5p4 = Symbol();
var \u03B5i10 = Symbol();
var \u03B5$8 = Symbol();
var \u03B510 = Symbol();
var \u03B5p23 = Symbol();
var \u03B5i23 = Symbol();
var \u03B5$23 = Symbol();
var \u03B523 = Symbol();
var \u03B5ParagraphComponent5 = Symbol();
var \u03B5i33 = Symbol();
var \u03B5$32 = Symbol();
var \u03B533 = Symbol();
var \u03B5ActionComponent2 = Symbol();
var bb\u03C62 = Symbol();
var \u03B5i42 = Symbol();
var \u03B5$42 = Symbol();
var \u03B542 = Symbol();
var \u03B5ParagraphComponent22 = Symbol();
var \u03B5i52 = Symbol();
var \u03B5$52 = Symbol();
var \u03B552 = Symbol();
var \u03B5ParagraphComponent32 = Symbol();
var \u03B5i62 = Symbol();
var \u03B5$62 = Symbol();
var \u03B562 = Symbol();
var \u03B5i72 = Symbol();
var \u03B5$72 = Symbol();
var \u03B572 = Symbol();
var \u03B5LineComponent2 = Symbol();
var \u03B5ParagraphComponent42 = Symbol();
var \u03B5small2 = Symbol();
var \u03B5i82 = Symbol();
var \u03B582 = Symbol();
var \u03B5a3 = Symbol();
var bk\u03C62 = Symbol();
var \u03B5i92 = Symbol();
var \u03B592 = Symbol();
var \u03A8\u03A8up4 = Symbol.for("##up");
var \u03A8placeChild8 = Symbol.for("#placeChild");
var \u03A8afterVisit4 = Symbol.for("#afterVisit");
var \u03A8appendChild4 = Symbol.for("#appendChild");
var ResetPassword = class extends import_ResetPassword.default {
  render() {
    var \u03C4LayoutComponent, \u03F2\u03C4 = renderContext.context || {}, \u03B9LayoutComponent, \u0394LayoutComponent, \u03C4atS, \u03C4auS, \u03C4ContentComponent, \u03B9ContentComponent, \u0394ContentComponent, \u03C4avS, \u03C4p, \u03B9p, \u0394p, \u03C5p, \u03C4p2, \u03B9p2, \u0394p2, \u03C5p2, \u03C4ParagraphComponent, \u03B9ParagraphComponent, \u0394ParagraphComponent, \u03C4ayS, \u03C5ParagraphComponent, \u03C4ActionComponent, \u03B9ActionComponent, \u0394ActionComponent, \u03C4baS, \u03C5ActionComponent, \u03C4ParagraphComponent2, \u03B9ParagraphComponent2, \u0394ParagraphComponent2, \u03C4bdS, \u03C5ParagraphComponent2, \u03C4ParagraphComponent3, \u03B9ParagraphComponent3, \u0394ParagraphComponent3, \u03C4bfS, \u03C5ParagraphComponent3, \u03C4br, \u03C4LineComponent, \u03B9LineComponent, \u0394LineComponent, \u03C4ParagraphComponent4, \u03B9ParagraphComponent4, \u0394ParagraphComponent4, \u03C4biS, \u03C4br2, \u03C4small, \u03B9small, \u0394small, \u03C5small, \u03C4a, \u03B9a, \u0394a, \u03C5a;
    (\u03B9LayoutComponent = \u0394LayoutComponent = 1, \u03C4LayoutComponent = \u03F2\u03C4[\u03B5LayoutComponent2]) || (\u03B9LayoutComponent = \u0394LayoutComponent = 0, \u03F2\u03C4[\u03B5LayoutComponent2] = \u03C4LayoutComponent = createComponent(LayoutComponent, null, "r-af", null));
    \u03B9LayoutComponent || (\u03C4LayoutComponent[\u03A8\u03A8up4] = \u03F2\u03C4._);
    \u03C4atS = \u03C4LayoutComponent.slot$("header", \u03C4LayoutComponent);
    \u03C4auS = \u03C4LayoutComponent.slot$("__", \u03C4LayoutComponent);
    (\u03B9ContentComponent = \u0394ContentComponent = 1, \u03C4ContentComponent = \u03C4LayoutComponent[\u03B5ContentComponent2]) || (\u03B9ContentComponent = \u0394ContentComponent = 0, \u03C4LayoutComponent[\u03B5ContentComponent2] = \u03C4ContentComponent = createComponent(ContentComponent, \u03C4atS, "r-ag", null));
    \u03C4avS = \u03C4ContentComponent.slot$("__", \u03C4LayoutComponent);
    \u03B9ContentComponent || (\u03C4ContentComponent.slot = "header");
    (\u03B9p = \u0394p = 1, \u03C4p = \u03C4LayoutComponent[\u03B5p4]) || (\u03B9p = \u0394p = 0, \u03C4LayoutComponent[\u03B5p4] = \u03C4p = createElement("p", \u03C4avS, "r-ah", null));
    \u03B9p || \u03C4p.setAttribute("style", "font-size: 20px; margin-bottom: 20px; font-weight: bold;");
    renderContext.context = \u03C4LayoutComponent[\u03B5$8] || (\u03C4LayoutComponent[\u03B5$8] = {_: \u03C4p}), \u03C5p = import_framework4.helpers.config("app.name"), renderContext.context = null, \u03C5p === \u03C4LayoutComponent[\u03B510] && \u03B9p || (\u03C4LayoutComponent[\u03B5i10] = \u03C4p[\u03A8placeChild8](\u03C4LayoutComponent[\u03B510] = \u03C5p, 384, \u03C4LayoutComponent[\u03B5i10]));
    \u03B9ContentComponent || !\u03C4ContentComponent.setup || \u03C4ContentComponent.setup(\u0394ContentComponent);
    \u03C4ContentComponent[\u03A8afterVisit4](\u0394ContentComponent);
    \u03B9ContentComponent || \u03C4atS[\u03A8appendChild4](\u03C4ContentComponent);
    (\u03B9p2 = \u0394p2 = 1, \u03C4p2 = \u03C4LayoutComponent[\u03B5p23]) || (\u03B9p2 = \u0394p2 = 0, \u03C4LayoutComponent[\u03B5p23] = \u03C4p2 = createElement("p", \u03C4auS, "r-ai", null));
    \u03B9p2 || \u03C4p2.setAttribute("style", "font-weight: bold; font-size: 18px;");
    renderContext.context = \u03C4LayoutComponent[\u03B5$23] || (\u03C4LayoutComponent[\u03B5$23] = {_: \u03C4p2}), \u03C5p2 = this.request.t("auth.email.reset.greeting", "Hello!"), renderContext.context = null, \u03C5p2 === \u03C4LayoutComponent[\u03B523] && \u03B9p2 || (\u03C4LayoutComponent[\u03B5i23] = \u03C4p2[\u03A8placeChild8](\u03C4LayoutComponent[\u03B523] = \u03C5p2, 384, \u03C4LayoutComponent[\u03B5i23]));
    (\u03B9ParagraphComponent = \u0394ParagraphComponent = 1, \u03C4ParagraphComponent = \u03C4LayoutComponent[\u03B5ParagraphComponent5]) || (\u03B9ParagraphComponent = \u0394ParagraphComponent = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent5] = \u03C4ParagraphComponent = createComponent(ParagraphComponent, \u03C4auS, "r-aj", null));
    \u03C4ayS = \u03C4ParagraphComponent.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$32] || (\u03C4LayoutComponent[\u03B5$32] = {_: \u03C4ayS}), \u03C5ParagraphComponent = this.request.t("auth.email.reset.line", "You are receiving this email because we received a password reset for your account."), renderContext.context = null, \u03C5ParagraphComponent === \u03C4LayoutComponent[\u03B533] && \u03B9ParagraphComponent || (\u03C4LayoutComponent[\u03B5i33] = \u03C4ayS[\u03A8placeChild8](\u03C4LayoutComponent[\u03B533] = \u03C5ParagraphComponent, 384, \u03C4LayoutComponent[\u03B5i33]));
    \u03B9ParagraphComponent || !\u03C4ParagraphComponent.setup || \u03C4ParagraphComponent.setup(\u0394ParagraphComponent);
    \u03C4ParagraphComponent[\u03A8afterVisit4](\u0394ParagraphComponent);
    \u03B9ParagraphComponent || \u03C4auS[\u03A8appendChild4](\u03C4ParagraphComponent);
    (\u03B9ActionComponent = \u0394ActionComponent = 1, \u03C4ActionComponent = \u03C4LayoutComponent[\u03B5ActionComponent2]) || (\u03B9ActionComponent = \u0394ActionComponent = 0, \u03C4LayoutComponent[\u03B5ActionComponent2] = \u03C4ActionComponent = createComponent(ActionComponent, \u03C4auS, "r-ak", null));
    \u03C4baS = \u03C4ActionComponent.slot$("__", \u03C4LayoutComponent);
    \u03C5ActionComponent = this.request.passwordResetUrl, \u03C5ActionComponent === \u03C4LayoutComponent[bb\u03C62] || (\u03C4ActionComponent.url = \u03C4LayoutComponent[bb\u03C62] = \u03C5ActionComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$42] || (\u03C4LayoutComponent[\u03B5$42] = {_: \u03C4baS}), \u03C5ActionComponent = this.request.t("auth.email.reset.action", "Reset Password"), renderContext.context = null, \u03C5ActionComponent === \u03C4LayoutComponent[\u03B542] && \u03B9ActionComponent || (\u03C4LayoutComponent[\u03B5i42] = \u03C4baS[\u03A8placeChild8](\u03C4LayoutComponent[\u03B542] = \u03C5ActionComponent, 384, \u03C4LayoutComponent[\u03B5i42]));
    \u03B9ActionComponent || !\u03C4ActionComponent.setup || \u03C4ActionComponent.setup(\u0394ActionComponent);
    \u03C4ActionComponent[\u03A8afterVisit4](\u0394ActionComponent);
    \u03B9ActionComponent || \u03C4auS[\u03A8appendChild4](\u03C4ActionComponent);
    (\u03B9ParagraphComponent2 = \u0394ParagraphComponent2 = 1, \u03C4ParagraphComponent2 = \u03C4LayoutComponent[\u03B5ParagraphComponent22]) || (\u03B9ParagraphComponent2 = \u0394ParagraphComponent2 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent22] = \u03C4ParagraphComponent2 = createComponent(ParagraphComponent, \u03C4auS, "r-al", null));
    \u03C4bdS = \u03C4ParagraphComponent2.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$52] || (\u03C4LayoutComponent[\u03B5$52] = {_: \u03C4bdS}), \u03C5ParagraphComponent2 = this.request.t("auth.email.reset.footer", "If you did not request a password reset, no further action is required."), renderContext.context = null, \u03C5ParagraphComponent2 === \u03C4LayoutComponent[\u03B552] && \u03B9ParagraphComponent2 || (\u03C4LayoutComponent[\u03B5i52] = \u03C4bdS[\u03A8placeChild8](\u03C4LayoutComponent[\u03B552] = \u03C5ParagraphComponent2, 384, \u03C4LayoutComponent[\u03B5i52]));
    \u03B9ParagraphComponent2 || !\u03C4ParagraphComponent2.setup || \u03C4ParagraphComponent2.setup(\u0394ParagraphComponent2);
    \u03C4ParagraphComponent2[\u03A8afterVisit4](\u0394ParagraphComponent2);
    \u03B9ParagraphComponent2 || \u03C4auS[\u03A8appendChild4](\u03C4ParagraphComponent2);
    (\u03B9ParagraphComponent3 = \u0394ParagraphComponent3 = 1, \u03C4ParagraphComponent3 = \u03C4LayoutComponent[\u03B5ParagraphComponent32]) || (\u03B9ParagraphComponent3 = \u0394ParagraphComponent3 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent32] = \u03C4ParagraphComponent3 = createComponent(ParagraphComponent, \u03C4auS, "r-am", null));
    \u03C4bfS = \u03C4ParagraphComponent3.slot$("__", \u03C4LayoutComponent);
    renderContext.context = \u03C4LayoutComponent[\u03B5$62] || (\u03C4LayoutComponent[\u03B5$62] = {_: \u03C4bfS}), \u03C5ParagraphComponent3 = this.request.t("auth.email.signing", "Regards,"), renderContext.context = null, \u03C5ParagraphComponent3 === \u03C4LayoutComponent[\u03B562] && \u03B9ParagraphComponent3 || (\u03C4LayoutComponent[\u03B5i62] = \u03C4bfS[\u03A8placeChild8](\u03C4LayoutComponent[\u03B562] = \u03C5ParagraphComponent3, 128, \u03C4LayoutComponent[\u03B5i62]));
    \u03B9ParagraphComponent3 || (\u03C4br = createElement("br", \u03C4bfS, "r-an", null));
    renderContext.context = \u03C4LayoutComponent[\u03B5$72] || (\u03C4LayoutComponent[\u03B5$72] = {_: \u03C4bfS}), \u03C5ParagraphComponent3 = import_framework4.helpers.config("app.name"), renderContext.context = null, \u03C5ParagraphComponent3 === \u03C4LayoutComponent[\u03B572] && \u03B9ParagraphComponent3 || (\u03C4LayoutComponent[\u03B5i72] = \u03C4bfS[\u03A8placeChild8](\u03C4LayoutComponent[\u03B572] = \u03C5ParagraphComponent3, 256, \u03C4LayoutComponent[\u03B5i72]));
    \u03B9ParagraphComponent3 || !\u03C4ParagraphComponent3.setup || \u03C4ParagraphComponent3.setup(\u0394ParagraphComponent3);
    \u03C4ParagraphComponent3[\u03A8afterVisit4](\u0394ParagraphComponent3);
    \u03B9ParagraphComponent3 || \u03C4auS[\u03A8appendChild4](\u03C4ParagraphComponent3);
    (\u03B9LineComponent = \u0394LineComponent = 1, \u03C4LineComponent = \u03C4LayoutComponent[\u03B5LineComponent2]) || (\u03B9LineComponent = \u0394LineComponent = 0, \u03C4LayoutComponent[\u03B5LineComponent2] = \u03C4LineComponent = createComponent(LineComponent, \u03C4auS, "r-ao", null));
    \u03B9LineComponent || !\u03C4LineComponent.setup || \u03C4LineComponent.setup(\u0394LineComponent);
    \u03C4LineComponent[\u03A8afterVisit4](\u0394LineComponent);
    \u03B9LineComponent || \u03C4auS[\u03A8appendChild4](\u03C4LineComponent);
    (\u03B9ParagraphComponent4 = \u0394ParagraphComponent4 = 1, \u03C4ParagraphComponent4 = \u03C4LayoutComponent[\u03B5ParagraphComponent42]) || (\u03B9ParagraphComponent4 = \u0394ParagraphComponent4 = 0, \u03C4LayoutComponent[\u03B5ParagraphComponent42] = \u03C4ParagraphComponent4 = createComponent(ParagraphComponent, \u03C4auS, "r-ap", null));
    \u03C4biS = \u03C4ParagraphComponent4.slot$("__", \u03C4LayoutComponent);
    \u03B9ParagraphComponent4 || (\u03C4br2 = createElement("br", \u03C4biS, "r-aq", null));
    (\u03B9small = \u0394small = 1, \u03C4small = \u03C4LayoutComponent[\u03B5small2]) || (\u03B9small = \u0394small = 0, \u03C4LayoutComponent[\u03B5small2] = \u03C4small = createElement("small", \u03C4biS, "r-ar", null));
    \u03B9small || \u03C4small.setAttribute("style", "color: #777;");
    \u03C5small = this.request.t("auth.email.url", "If you are having trouble clicking the button, copy and paste the URL below into your web browser:") + " ", \u03C5small === \u03C4LayoutComponent[\u03B582] && \u03B9small || (\u03C4LayoutComponent[\u03B5i82] = \u03C4small[\u03A8placeChild8](\u03C4LayoutComponent[\u03B582] = \u03C5small, 128, \u03C4LayoutComponent[\u03B5i82]));
    (\u03B9a = \u0394a = 1, \u03C4a = \u03C4LayoutComponent[\u03B5a3]) || (\u03B9a = \u0394a = 0, \u03C4LayoutComponent[\u03B5a3] = \u03C4a = createElement("a", \u03C4small, "r-as", null));
    \u03C5a = this.request.passwordResetUrl, \u03C5a === \u03C4LayoutComponent[bk\u03C62] || (\u03C4a.href = \u03C4LayoutComponent[bk\u03C62] = \u03C5a);
    \u03B9a || \u03C4a.setAttribute("style", "word-break: break-all;");
    \u03C5a = this.request.passwordResetUrl, \u03C5a === \u03C4LayoutComponent[\u03B592] && \u03B9a || (\u03C4LayoutComponent[\u03B5i92] = \u03C4a[\u03A8placeChild8](\u03C4LayoutComponent[\u03B592] = \u03C5a, 384, \u03C4LayoutComponent[\u03B5i92]));
    \u03B9ParagraphComponent4 || !\u03C4ParagraphComponent4.setup || \u03C4ParagraphComponent4.setup(\u0394ParagraphComponent4);
    \u03C4ParagraphComponent4[\u03A8afterVisit4](\u0394ParagraphComponent4);
    \u03B9ParagraphComponent4 || \u03C4auS[\u03A8appendChild4](\u03C4ParagraphComponent4);
    \u03B9LayoutComponent || !\u03C4LayoutComponent.setup || \u03C4LayoutComponent.setup(\u0394LayoutComponent);
    \u03C4LayoutComponent[\u03A8afterVisit4](\u0394LayoutComponent);
    return \u03C4LayoutComponent;
  }
};
var ResetPassword_default = ResetPassword;

// config/app.imba
var app_default = {
  name: import_framework5.helpers.env("APP_NAME", "Formidable"),
  env: import_framework5.helpers.env("APP_ENV", "production"),
  debug: import_framework5.helpers.toBoolean(import_framework5.helpers.env("APP_DEBUG", false)),
  url: import_framework5.helpers.env("APP_URL", "http://localhost:3000"),
  client_url: import_framework5.helpers.env("CLIENT_URL", "http://localhost:8000"),
  locale: "en",
  fallback_locale: "en",
  key: import_framework5.helpers.env("APP_KEY"),
  resolvers: [
    require("@formidablejs/framework").HashServiceResolver,
    require("@formidablejs/framework").RedisServiceResolver,
    require("@formidablejs/framework").SessionMemoryStoreServiceResolver,
    require("@formidablejs/framework").SessionFileStoreServiceResolver,
    require("@formidablejs/framework").LanguageServiceResolver,
    require("@formidablejs/framework").MailServiceResolver,
    require("@formidablejs/framework").PersonalAccessTokenServiceResolver,
    require("@formidablejs/framework").AuthenticationServiceResolver,
    require("@formidablejs/framework").CsrfServiceResolver,
    require_AppServiceResolver(),
    require_RouterServiceResolver(),
    require_ValidationServiceResolver(),
    require_NextjsServiceResolver()
  ]
};

// config/auth.imba
var auth_default = {
  defaults: {
    protocol: "api"
  },
  protocols: {
    api: {
      provider: "jwt"
    }
  },
  providers: {
    jwt: {
      driver: "jwt",
      hidden: ["id", "password"],
      table: "users"
    },
    session: {
      driver: "session",
      table: "users"
    }
  }
};

// config/cors.imba
var import_framework6 = __toModule(require("@formidablejs/framework"));
var cors_default = {
  paths: ["/*"],
  allowed_methods: ["*"],
  allowed_origins: [import_framework6.helpers.env("CLIENT_URL", "*")],
  allowed_headers: ["*"],
  max_age: 0,
  supports_credentials: false
};

// config/database.imba
var import_framework7 = __toModule(require("@formidablejs/framework"));
var database_default = {
  default: import_framework7.helpers.env("DB_CONNECTION", "mysql"),
  connections: {
    sqlite: {
      driver: "sqlite3",
      filename: import_framework7.helpers.env("DATABASE_URL")
    },
    mysql: {
      driver: "mysql",
      url: import_framework7.helpers.env("DATABASE_URL"),
      host: import_framework7.helpers.env("DB_HOST", "127.0.0.1"),
      port: import_framework7.helpers.env("DB_PORT", "3306"),
      user: import_framework7.helpers.env("DB_USER", ""),
      database: import_framework7.helpers.env("DB_DATABASE", ""),
      password: import_framework7.helpers.env("DB_PASSWORD", ""),
      charset: "utf8mb4"
    },
    pgsql: {
      driver: "pg",
      url: import_framework7.helpers.env("DATABASE_URL"),
      host: import_framework7.helpers.env("DB_HOST", "127.0.0.1"),
      port: import_framework7.helpers.env("DB_PORT", "5432"),
      user: import_framework7.helpers.env("DB_USER", ""),
      database: import_framework7.helpers.env("DB_DATABASE", ""),
      password: import_framework7.helpers.env("DB_PASSWORD", ""),
      charset: "utf8"
    },
    mssql: {
      driver: "tedious",
      url: import_framework7.helpers.env("DATABASE_URL"),
      host: import_framework7.helpers.env("DB_HOST", "127.0.0.1"),
      port: import_framework7.helpers.env("DB_PORT", "5432"),
      user: import_framework7.helpers.env("DB_USER", ""),
      database: import_framework7.helpers.env("DB_DATABASE", ""),
      password: import_framework7.helpers.env("DB_PASSWORD", ""),
      charset: "utf8"
    }
  },
  migrations: {
    tableName: "migrations",
    directory: "./database/migrations"
  },
  redis: {
    options: {
      prefix: import_framework7.helpers.env("REDIS_PREFIX", import_framework7.helpers.slug(import_framework7.helpers.env("APP_NAME", "formidable"), "_") + "_database_")
    },
    default: {
      url: import_framework7.helpers.env("REDIS_URL"),
      host: import_framework7.helpers.env("REDIS_HOST", "127.0.0.1"),
      password: import_framework7.helpers.env("REDIS_PASSWORD", null),
      port: import_framework7.helpers.env("REDIS_PORT", "6379"),
      database: import_framework7.helpers.env("REDIS_DB", "0")
    },
    cache: {
      url: import_framework7.helpers.env("REDIS_URL"),
      host: import_framework7.helpers.env("REDIS_HOST", "127.0.0.1"),
      password: import_framework7.helpers.env("REDIS_PASSWORD", null),
      port: import_framework7.helpers.env("REDIS_PORT", "6379"),
      database: import_framework7.helpers.env("REDIS_CACHE_DB", "1")
    }
  }
};

// config/hashing.imba
var import_framework8 = __toModule(require("@formidablejs/framework"));
var hashing_default = {
  driver: "bcrypt",
  bcrypt: {
    rounds: import_framework8.helpers.env("BCRYPT_ROUNDS", 10)
  },
  argon2: {
    memoryCost: import_framework8.helpers.env("ARGON2_MEMORY", 1024),
    parallelism: import_framework8.helpers.env("ARGON2_THREADS", 1),
    timeCost: import_framework8.helpers.env("ARGON2_TIME", 2)
  }
};

// config/mail.imba
var import_framework9 = __toModule(require("@formidablejs/framework"));
var mail_default = {
  default: "smtp",
  mailers: {
    smtp: {
      transport: "smtp",
      host: import_framework9.helpers.env("MAIL_HOST", "smtp.mailgun.org"),
      port: import_framework9.helpers.env("MAIL_PORT", 587),
      secure: import_framework9.helpers.env("MAIL_SECURE", true),
      username: import_framework9.helpers.env("MAIL_USERNAME"),
      password: import_framework9.helpers.env("MAIL_PASSWORD")
    },
    sendmail: {
      transport: "sendmail",
      newline: "unix",
      path: "/usr/sbin/sendmail"
    }
  },
  from: {
    address: import_framework9.helpers.env("MAIL_FROM_ADDRESS", "hello@example.com"),
    name: import_framework9.helpers.env("MAIL_FROM_NAME", "Example")
  }
};

// config/session.imba
var import_framework10 = __toModule(require("@formidablejs/framework"));
var session_default = {
  driver: "memory",
  cookie: import_framework10.helpers.env("SESSION_COOKIE", import_framework10.helpers.slug(import_framework10.helpers.env("APP_NAME", "formidable"), "_") + "_session"),
  encrypt: true,
  lifetime: import_framework10.helpers.env("SESSION_LIFETIME", import_framework10.helpers.ms("2 hours")),
  path: "/",
  domain: import_framework10.helpers.env("SESSION_DOMAIN", null),
  secure: import_framework10.helpers.env("SESSION_SECURE_COOKIE", false),
  http_only: import_framework10.helpers.env("SESSION_HTTP_ONLY", false),
  same_site: import_framework10.helpers.env("SESSION_SAME_SITE", "lax")
};

// config/index.imba
var Config = class extends import_framework11.ConfigRepository {
  get registered() {
    return {
      app: app_default,
      auth: auth_default,
      cors: cors_default,
      database: database_default,
      hashing: hashing_default,
      mail: mail_default,
      session: session_default
    };
  }
};

// app/Exceptions/Handler.imba
var import_framework12 = __toModule(require("@formidablejs/framework"));
var Handler = class extends import_framework12.ExceptionHandler {
};

// app/Http/Kernel.imba
var import_framework18 = __toModule(require("@formidablejs/framework"));

// app/Http/Middleware/AcceptLanguage.imba
var import_framework13 = __toModule(require("@formidablejs/framework"));
var AcceptLanguage = class extends import_framework13.AcceptLanguage {
  get mappings() {
    return {};
  }
};
var AcceptLanguage_default = AcceptLanguage;

// app/Http/Middleware/ConvertEmptyStringsToNull.imba
var import_framework14 = __toModule(require("@formidablejs/framework"));
var ConvertEmptyStringsToNull = class extends import_framework14.ConvertEmptyStringsToNull {
  get except() {
    return [
      "password",
      "password_confirmation"
    ];
  }
};
var ConvertEmptyStringsToNull_default = ConvertEmptyStringsToNull;

// app/Http/Middleware/ErrorIfAuthenticated.imba
var import_framework15 = __toModule(require("@formidablejs/framework"));
var ErrorIfAuthenticated = class extends import_framework15.ErrorIfAuthenticated {
};
var ErrorIfAuthenticated_default = ErrorIfAuthenticated;

// app/Http/Middleware/TrimStrings.imba
var import_framework16 = __toModule(require("@formidablejs/framework"));
var TrimStrings = class extends import_framework16.TrimStrings {
  get except() {
    return [
      "password",
      "password_confirmation"
    ];
  }
};
var TrimStrings_default = TrimStrings;

// app/Http/Middleware/VerifyCsrfToken.imba
var import_framework17 = __toModule(require("@formidablejs/framework"));
var VerifyCsrfToken = class extends import_framework17.VerifyCsrfToken {
  get except() {
    return [];
  }
};
var VerifyCsrfToken_default = VerifyCsrfToken;

// app/Http/Kernel.imba
var Kernel = class extends import_framework18.Kernel {
  get middleware() {
    return [
      import_framework18.HasEncryptionKey,
      TrimStrings_default,
      ConvertEmptyStringsToNull_default
    ];
  }
  get middlewareGroups() {
    return {
      jwt: [],
      session: [
        import_framework18.HasCsrfToken,
        VerifyCsrfToken_default
      ]
    };
  }
  get routeMiddleware() {
    return {
      auth: import_framework18.Authenticate,
      guest: ErrorIfAuthenticated_default,
      lang: AcceptLanguage_default,
      signed: import_framework18.ValidateSignature
    };
  }
};

// bootstrap/main.imba
app.bind(import_framework19.Kernel, Kernel).bind(import_framework19.ConfigRepository, Config).bind(import_framework19.Language, import_framework19.Language).bind(import_framework19.ExceptionHandler, Handler);
var main_default = app.prepare();

// server.app.imba
var import_supertest = __toModule(require("supertest"));
exports.Application = main_default.initiate(main_default.make(import_framework20.Kernel), true);
exports.request = import_supertest.default;
//__FOOT__
