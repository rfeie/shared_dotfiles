const rearg = (fn, indexes) => (...args) => fn(...indexes.map(i => args[i]));
