/*
 * Generated by PEG.js 0.10.0.
 *
 * http://pegjs.org/
 */

"use strict";

function peg$subclass(child, parent) {
  function ctor() { this.constructor = child; }
  ctor.prototype = parent.prototype;
  child.prototype = new ctor();
}

function peg$SyntaxError(message, expected, found, location) {
  this.message  = message;
  this.expected = expected;
  this.found    = found;
  this.location = location;
  this.name     = "SyntaxError";

  if (typeof Error.captureStackTrace === "function") {
    Error.captureStackTrace(this, peg$SyntaxError);
  }
}

peg$subclass(peg$SyntaxError, Error);

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
        literal: function(expectation) {
          return "\"" + literalEscape(expectation.text) + "\"";
        },

        "class": function(expectation) {
          var escapedParts = "",
              i;

          for (i = 0; i < expectation.parts.length; i++) {
            escapedParts += expectation.parts[i] instanceof Array
              ? classEscape(expectation.parts[i][0]) + "-" + classEscape(expectation.parts[i][1])
              : classEscape(expectation.parts[i]);
          }

          return "[" + (expectation.inverted ? "^" : "") + escapedParts + "]";
        },

        any: function(expectation) {
          return "any character";
        },

        end: function(expectation) {
          return "end of input";
        },

        other: function(expectation) {
          return expectation.description;
        }
      };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/"/g,  '\\"')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, '\\\\')
      .replace(/\]/g, '\\]')
      .replace(/\^/g, '\\^')
      .replace(/-/g,  '\\-')
      .replace(/\0/g, '\\0')
      .replace(/\t/g, '\\t')
      .replace(/\n/g, '\\n')
      .replace(/\r/g, '\\r')
      .replace(/[\x00-\x0F]/g,          function(ch) { return '\\x0' + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return '\\x'  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = new Array(expected.length),
        i, j;

    for (i = 0; i < expected.length; i++) {
      descriptions[i] = describeExpectation(expected[i]);
    }

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== void 0 ? options : {};

  var peg$FAILED = {},

      peg$startRuleFunctions = { StartRule: peg$parseStartRule },
      peg$startRuleFunction  = peg$parseStartRule,

      peg$c0 = ".",
      peg$c1 = peg$literalExpectation(".", false),
      peg$c2 = "{",
      peg$c3 = peg$literalExpectation("{", false),
      peg$c4 = "}",
      peg$c5 = peg$literalExpectation("}", false),
      peg$c6 = function(selector, items) {
              console.log(items);
              const arr = [];

              items.forEach(x => {
                  arr.push({
                      property: x[1],
                      value: x[5]
                  });
              });

              return {
                  selector,
                  items: arr
              };
          },
      peg$c7 = function(l) {
              return l.join('');
          },
      peg$c8 = /^[a-zA-Z_\-]/,
      peg$c9 = peg$classExpectation([["a", "z"], ["A", "Z"], "_", "-"], false, false),
      peg$c10 = /^[a-zA-Z0-9]/,
      peg$c11 = peg$classExpectation([["a", "z"], ["A", "Z"], ["0", "9"]], false, false),
      peg$c12 = peg$otherExpectation("whitespace"),
      peg$c13 = /^[ \t]/,
      peg$c14 = peg$classExpectation([" ", "\t"], false, false),
      peg$c15 = peg$otherExpectation("whitespaces"),
      peg$c16 = peg$otherExpectation("Linebreak"),
      peg$c17 = /^[\r\n]/,
      peg$c18 = peg$classExpectation(["\r", "\n"], false, false),
      peg$c19 = peg$otherExpectation("Linebreaks"),
      peg$c20 = peg$otherExpectation("\u7A7A\u767D\u5B57\u7B26\u5408\u8F91"),
      peg$c21 = peg$otherExpectation(""),
      peg$c22 = ":",
      peg$c23 = peg$literalExpectation(":", false),
      peg$c24 = ";",
      peg$c25 = peg$literalExpectation(";", false),

      peg$currPos          = 0,
      peg$savedPos         = 0,
      peg$posDetailsCache  = [{ line: 1, column: 1 }],
      peg$maxFailPos       = 0,
      peg$maxFailExpected  = [],
      peg$silentFails      = 0,

      peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== void 0 ? location : peg$computeLocation(peg$savedPos, peg$currPos)

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos], p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line:   details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;
      return details;
    }
  }

  function peg$computeLocation(startPos, endPos) {
    var startPosDetails = peg$computePosDetails(startPos),
        endPosDetails   = peg$computePosDetails(endPos);

    return {
      start: {
        offset: startPos,
        line:   startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line:   endPosDetails.line,
        column: endPosDetails.column
      }
    };
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseStartRule() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8;

    s0 = peg$currPos;
    s1 = peg$parseEMPTYS();
    if (s1 !== peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 46) {
        s2 = peg$c0;
        peg$currPos++;
      } else {
        s2 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$c1); }
      }
      if (s2 !== peg$FAILED) {
        s3 = peg$parseWord();
        if (s3 !== peg$FAILED) {
          s4 = peg$parseEMPTYS();
          if (s4 !== peg$FAILED) {
            if (input.charCodeAt(peg$currPos) === 123) {
              s5 = peg$c2;
              peg$currPos++;
            } else {
              s5 = peg$FAILED;
              if (peg$silentFails === 0) { peg$fail(peg$c3); }
            }
            if (s5 !== peg$FAILED) {
              s6 = peg$parseITEMS();
              if (s6 !== peg$FAILED) {
                if (input.charCodeAt(peg$currPos) === 125) {
                  s7 = peg$c4;
                  peg$currPos++;
                } else {
                  s7 = peg$FAILED;
                  if (peg$silentFails === 0) { peg$fail(peg$c5); }
                }
                if (s7 !== peg$FAILED) {
                  s8 = peg$parseEMPTYS();
                  if (s8 !== peg$FAILED) {
                    peg$savedPos = s0;
                    s1 = peg$c6(s3, s6);
                    s0 = s1;
                  } else {
                    peg$currPos = s0;
                    s0 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s0;
                  s0 = peg$FAILED;
                }
              } else {
                peg$currPos = s0;
                s0 = peg$FAILED;
              }
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseWord() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseAlphaChars();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseAlphaChars();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseWordWithNumeric() {
    var s0, s1, s2;

    s0 = peg$currPos;
    s1 = [];
    s2 = peg$parseALPHA_NUMERIC_CHARS();
    if (s2 !== peg$FAILED) {
      while (s2 !== peg$FAILED) {
        s1.push(s2);
        s2 = peg$parseALPHA_NUMERIC_CHARS();
      }
    } else {
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$c7(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseAlphaChars() {
    var s0;

    if (peg$c8.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c9); }
    }

    return s0;
  }

  function peg$parseALPHA_NUMERIC_CHARS() {
    var s0;

    if (peg$c10.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c11); }
    }

    return s0;
  }

  function peg$parseWS() {
    var s0, s1;

    peg$silentFails++;
    if (peg$c13.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c14); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c12); }
    }

    return s0;
  }

  function peg$parseWSS() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    s1 = peg$parseWS();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseWS();
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c15); }
    }

    return s0;
  }

  function peg$parseLB() {
    var s0, s1;

    peg$silentFails++;
    if (peg$c17.test(input.charAt(peg$currPos))) {
      s0 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s0 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c18); }
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c16); }
    }

    return s0;
  }

  function peg$parseLBS() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    s1 = peg$parseLB();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseLB();
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c19); }
    }

    return s0;
  }

  function peg$parseEMPTYS() {
    var s0, s1, s2;

    peg$silentFails++;
    s0 = peg$currPos;
    s1 = peg$parseLBS();
    if (s1 !== peg$FAILED) {
      s2 = peg$parseWSS();
      if (s2 !== peg$FAILED) {
        s1 = [s1, s2];
        s0 = s1;
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c20); }
    }

    return s0;
  }

  function peg$parseITEMS() {
    var s0, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10;

    peg$silentFails++;
    s0 = [];
    s1 = peg$currPos;
    s2 = peg$parseEMPTYS();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseWord();
      if (s3 !== peg$FAILED) {
        s4 = peg$parseWSS();
        if (s4 !== peg$FAILED) {
          if (input.charCodeAt(peg$currPos) === 58) {
            s5 = peg$c22;
            peg$currPos++;
          } else {
            s5 = peg$FAILED;
            if (peg$silentFails === 0) { peg$fail(peg$c23); }
          }
          if (s5 !== peg$FAILED) {
            s6 = peg$parseWSS();
            if (s6 !== peg$FAILED) {
              s7 = peg$parseWordWithNumeric();
              if (s7 !== peg$FAILED) {
                s8 = peg$parseWSS();
                if (s8 !== peg$FAILED) {
                  if (input.charCodeAt(peg$currPos) === 59) {
                    s9 = peg$c24;
                    peg$currPos++;
                  } else {
                    s9 = peg$FAILED;
                    if (peg$silentFails === 0) { peg$fail(peg$c25); }
                  }
                  if (s9 !== peg$FAILED) {
                    s10 = peg$parseEMPTYS();
                    if (s10 !== peg$FAILED) {
                      s2 = [s2, s3, s4, s5, s6, s7, s8, s9, s10];
                      s1 = s2;
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      } else {
        peg$currPos = s1;
        s1 = peg$FAILED;
      }
    } else {
      peg$currPos = s1;
      s1 = peg$FAILED;
    }
    if (s1 !== peg$FAILED) {
      while (s1 !== peg$FAILED) {
        s0.push(s1);
        s1 = peg$currPos;
        s2 = peg$parseEMPTYS();
        if (s2 !== peg$FAILED) {
          s3 = peg$parseWord();
          if (s3 !== peg$FAILED) {
            s4 = peg$parseWSS();
            if (s4 !== peg$FAILED) {
              if (input.charCodeAt(peg$currPos) === 58) {
                s5 = peg$c22;
                peg$currPos++;
              } else {
                s5 = peg$FAILED;
                if (peg$silentFails === 0) { peg$fail(peg$c23); }
              }
              if (s5 !== peg$FAILED) {
                s6 = peg$parseWSS();
                if (s6 !== peg$FAILED) {
                  s7 = peg$parseWordWithNumeric();
                  if (s7 !== peg$FAILED) {
                    s8 = peg$parseWSS();
                    if (s8 !== peg$FAILED) {
                      if (input.charCodeAt(peg$currPos) === 59) {
                        s9 = peg$c24;
                        peg$currPos++;
                      } else {
                        s9 = peg$FAILED;
                        if (peg$silentFails === 0) { peg$fail(peg$c25); }
                      }
                      if (s9 !== peg$FAILED) {
                        s10 = peg$parseEMPTYS();
                        if (s10 !== peg$FAILED) {
                          s2 = [s2, s3, s4, s5, s6, s7, s8, s9, s10];
                          s1 = s2;
                        } else {
                          peg$currPos = s1;
                          s1 = peg$FAILED;
                        }
                      } else {
                        peg$currPos = s1;
                        s1 = peg$FAILED;
                      }
                    } else {
                      peg$currPos = s1;
                      s1 = peg$FAILED;
                    }
                  } else {
                    peg$currPos = s1;
                    s1 = peg$FAILED;
                  }
                } else {
                  peg$currPos = s1;
                  s1 = peg$FAILED;
                }
              } else {
                peg$currPos = s1;
                s1 = peg$FAILED;
              }
            } else {
              peg$currPos = s1;
              s1 = peg$FAILED;
            }
          } else {
            peg$currPos = s1;
            s1 = peg$FAILED;
          }
        } else {
          peg$currPos = s1;
          s1 = peg$FAILED;
        }
      }
    } else {
      s0 = peg$FAILED;
    }
    peg$silentFails--;
    if (s0 === peg$FAILED) {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$c21); }
    }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse:       peg$parse
};
