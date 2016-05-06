goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../ponting_dynamics/generic.js", ['ponting_dynamics.generic'], ['cljs.core']);
goog.addDependency("../clojure/set.js", ['clojure.set'], ['cljs.core']);
goog.addDependency("../quil/middlewares/deprecated_options.js", ['quil.middlewares.deprecated_options'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../quil/util.js", ['quil.util'], ['cljs.core', 'clojure.string']);
goog.addDependency("../quil/sketch.js", ['quil.sketch'], ['goog.dom', 'cljs.core', 'quil.middlewares.deprecated_options', 'goog.events.EventType', 'goog.events', 'quil.util']);
goog.addDependency("../ponting_dynamics/combinatorics.js", ['ponting_dynamics.combinatorics'], ['cljs.core']);
goog.addDependency("../ponting_dynamics/collision.js", ['ponting_dynamics.collision'], ['ponting_dynamics.combinatorics', 'cljs.core', 'clojure.set']);
goog.addDependency("../processing.js", ['org.processingjs.Processing'], []);
goog.addDependency("../quil/core.js", ['quil.core'], ['org.processingjs.Processing', 'quil.sketch', 'cljs.core', 'clojure.string', 'quil.util']);
goog.addDependency("../ponting_dynamics/circles.js", ['ponting_dynamics.circles'], ['ponting_dynamics.collision', 'cljs.core', 'quil.core']);
