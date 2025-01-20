document.getElementById("test-btn").addEventListener("click", () => {
    const pattern = document.getElementById("pattern").value;
    const flags = document.getElementById("flags").value;
    const testString = document.getElementById("test-string").value;
  
    try {
      const regex = new RegExp(pattern, flags);
  
      // Update lastIndex if global flag is used
      regex.lastIndex = 0;
  
      const results = {
        source: regex.source,
        flags: regex.flags,
        global: regex.global,
        ignoreCase: regex.ignoreCase,
        multiline: regex.multiline,
        dotAll: regex.dotAll,
        unicode: regex.unicode,
        sticky: regex.sticky,
        lastIndex: regex.lastIndex,
        constructor: regex.constructor.name,
        toString: regex.toString(),
        test: regex.test(testString),
        exec: regex.exec(testString),
        // Simulate toSource() for demonstration
        toSource: `/${regex.source}/${regex.flags}`,
      };
  
      document.getElementById("output").textContent = JSON.stringify(results, null, 2);
    } catch (error) {
      document.getElementById("output").textContent = `Error: ${error.message}`;
    }
  });
  