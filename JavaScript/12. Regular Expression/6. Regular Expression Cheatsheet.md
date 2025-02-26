# JavaScript Regular Expressions: Complete Guide

## Basic Syntax

### Creating Regular Expressions
```javascript
// Using literal syntax (preferred for static patterns)
const regexLiteral = /pattern/flags;

// Using RegExp constructor (useful for dynamic patterns)
const regexConstructor = new RegExp("pattern", "flags");
```

### JavaScript RegExp Flags
- `g` - Global search (find all matches, not just the first)
- `i` - Case-insensitive search
- `m` - Multiline search (^ and $ match start/end of line)
- `s` - Dot (.) matches newlines (ES2018)
- `u` - Unicode support (ES6)
- `y` - Sticky search (ES6) - matches starting at the current position

## Character Classes and Sets

### Basic Character Classes
- `.` - Any character except newline
- `\d` - Digit [0-9]
- `\D` - Non-digit [^0-9]
- `\w` - Word character [A-Za-z0-9_]
- `\W` - Non-word character
- `\s` - Whitespace (space, tab, newline, etc.)
- `\S` - Non-whitespace character

### Character Sets
- `[abc]` - Any character from the set (a, b, or c)
- `[^abc]` - Any character not in the set
- `[a-z]` - Any character in the range
- `[0-9]` - Any digit in the range
- `[a-zA-Z0-9]` - Any letter or digit

## Quantifiers and Repetition

- `*` - 0 or more occurrences
- `+` - 1 or more occurrences
- `?` - 0 or 1 occurrence
- `{n}` - Exactly n occurrences
- `{n,}` - n or more occurrences
- `{n,m}` - Between n and m occurrences
- `*?`, `+?`, `??`, `{n}?`, `{n,}?`, `{n,m}?` - Non-greedy versions

## Anchors and Boundaries

- `^` - Start of string/line (with m flag)
- `$` - End of string/line (with m flag)
- `\b` - Word boundary
- `\B` - Non-word boundary
- `\A` - Start of string (not line)
- `\Z` - End of string (not line)

## Groups and Capturing

- `(xyz)` - Capturing group
- `(?:xyz)` - Non-capturing group
- `(?<name>xyz)` - Named capturing group (ES2018)
- `\1`, `\2`, etc. - Backreference to captured group
- `\k<name>` - Backreference to named group (ES2018)

## Alternation and Conditionals

- `x|y` - Match either x or y
- `(?=pattern)` - Positive lookahead
- `(?!pattern)` - Negative lookahead
- `(?<=pattern)` - Positive lookbehind (ES2018)
- `(?<!pattern)` - Negative lookbehind (ES2018)

## Escaping Special Characters

To match literal special characters, escape them with a backslash:
```
. * + ? ^ $ { } ( ) | [ ] / \
```

## Unicode and Special Characters

- `\t` - Tab
- `\n` - Newline
- `\r` - Carriage return
- `\f` - Form feed
- `\v` - Vertical tab
- `\0` - Null character
- `\uXXXX` - Unicode character
- `\u{XXXXX}` - Unicode code point (with u flag)

## String Methods with RegExp

### Main Methods
```javascript
// test - returns boolean if pattern is found
regex.test(string);

// exec - returns array with match details or null
regex.exec(string);

// match - returns array of matches or null
string.match(regex);

// matchAll - returns iterator of all matches (ES2020)
string.matchAll(regex);

// search - returns index of match or -1
string.search(regex);

// replace - replaces matches with replacement
string.replace(regex, replacement);

// replaceAll - replaces all matches (ES2021)
string.replaceAll(regex, replacement);

// split - splits string by regex matches
string.split(regex);
```

### Using Replacement Patterns
```javascript
// Using captured groups in replacement
"John Doe".replace(/(\w+)\s(\w+)/, "$2, $1"); // "Doe, John"

// Using function as replacer
"John Doe".replace(/(\w+)\s(\w+)/, (match, p1, p2) => `${p2}, ${p1}`);
```

## RegExp Properties and Methods

### Properties
```javascript
regex.source     // Pattern text
regex.flags      // Flags string
regex.global     // True if 'g' flag is set
regex.ignoreCase // True if 'i' flag is set
regex.multiline  // True if 'm' flag is set
regex.sticky     // True if 'y' flag is set
regex.unicode    // True if 'u' flag is set
regex.dotAll     // True if 's' flag is set
regex.lastIndex  // Next match position (with g or y flags)
```

## Advanced Techniques

### Optimizing Regular Expressions

1. **Be Specific**: More specific patterns are faster.
   ```javascript
   // Slower
   /.*foo/
   
   // Faster, more specific
   /[a-z]*foo/
   ```

2. **Use Non-Capturing Groups**: When you don't need the captured value.
   ```javascript
   // Slower (capturing)
   /(group)/
   
   // Faster (non-capturing)
   /(?:group)/
   ```

3. **Avoid Excessive Backtracking**: Catastrophic backtracking can hang your application.
   ```javascript
   // Potential catastrophic backtracking
   /^(a+)+$/
   
   // Alternative approach
   /^a+$/
   ```

4. **Use Anchors When Possible**: Helps the engine know where to start/end.
   ```javascript
   // Without anchors (searches entire string)
   /pattern/
   
   // With anchors (faster in many cases)
   /^pattern$/
   ```

### Common JavaScript Regex Patterns

#### Email Validation
```javascript
// Basic email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// More comprehensive email validation
const betterEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
```

#### URL Validation
```javascript
const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
```

#### Date Validation (MM/DD/YYYY)
```javascript
const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/;
```

#### Strong Password Validation
```javascript
// At least 8 chars, one uppercase, one lowercase, one number, one special char
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

#### Phone Number Validation (US)
```javascript
const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
```

#### IP Address Validation
```javascript
const ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
```

## Regular Expression Debugging

### Testing Tools
- Use regex testing tools like Regex101.com or RegExr.com for visualization
- Use console.log to see match results during development

### Common Pitfalls

1. **Forgetting to Escape Special Characters**
   ```javascript
   // Wrong - will cause errors
   const regex = /example.com/;  // '.' is a special character
   
   // Correct
   const regex = /example\.com/;
   ```

2. **Greedy vs. Lazy Quantifiers**
   ```javascript
   const str = "<div>Content</div>";
   
   // Greedy (matches too much)
   str.match(/<div>.*<\/div>/)[0];  // "<div>Content</div>"
   
   // Lazy (matches minimally)
   str.match(/<div>.*?<\/div>/)[0]; // "<div>Content</div>"
   ```

3. **Overlooking Global Flag When Needed**
   ```javascript
   const str = "test1 test2 test3";
   
   // Without global flag (only first match)
   str.match(/test\d/);    // ["test1"]
   
   // With global flag (all matches)
   str.match(/test\d/g);   // ["test1", "test2", "test3"]
   ```

4. **Using Wrong Character Class**
   ```javascript
   // \d only matches standard digits 0-9
   /\d/.test("①"); // false
   
   // With unicode flag for extended digits
   /\d/u.test("①"); // still false, as ① is not in \d even with Unicode flag
   
   // Better for Unicode
   /\p{Number}/u.test("①"); // true
   ```

## ES2018+ New Features

### Named Capture Groups
```javascript
const dateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const match = dateRegex.exec("2023-01-15");
console.log(match.groups.year);  // "2023"
console.log(match.groups.month); // "01"
console.log(match.groups.day);   // "15"
```

### Lookbehind Assertions
```javascript
// Positive lookbehind
const regex1 = /(?<=\$)\d+(\.\d*)?/;
regex1.exec("The price is $15.99"); // ["15.99"]

// Negative lookbehind
const regex2 = /(?<!\$)\d+(?:\.\d*)?/;
regex2.exec("The temperature is 25.5 degrees"); // ["25.5"]
```

### Unicode Property Escapes
```javascript
// Match any letter from any language
const unicodeLetters = /\p{Letter}/u;
unicodeLetters.test("A"); // true
unicodeLetters.test("鱼"); // true
unicodeLetters.test("9"); // false

// Match emoji
const emojiRegex = /\p{Emoji}/u;
emojiRegex.test("😀"); // true
```

### Dotall Flag
```javascript
// Without dotall flag, dot doesn't match newlines
/hello.world/.test("hello\nworld"); // false

// With dotall flag, dot matches newlines
/hello.world/s.test("hello\nworld"); // true
```

## Memory and Performance Considerations

1. **Avoid Creating Regexes in Loops**
   ```javascript
   // Bad - creates a new regex for each iteration
   for (let i = 0; i < 1000; i++) {
     const regex = new RegExp(`item${i}`);
     // ...
   }
   
   // Good - create outside loop
   for (let i = 0; i < 1000; i++) {
     const regex = new RegExp(`item${i}`);
     // ...
   }
   ```

2. **Be Careful with Wildcards and Unbounded Repetition**
   ```javascript
   // Can be slow on long strings
   const slowRegex = /a.*b/;
   
   // Often faster
   const fasterRegex = /a[^]*?b/;
   ```

3. **Avoid Nested Repetition When Possible**
   ```javascript
   // Can cause catastrophic backtracking
   const dangerousRegex = /^(a+)*$/;
   
   // Alternative approaches depending on what you're trying to match
   const saferRegex = /^a*$/;
   ```

4. **Early Bail Out with Anchors and Character Classes**
   ```javascript
   // Use anchors to avoid unnecessary matching
   const anchoredRegex = /^prefix/;
   
   // Check character classes early
   const optimizedRegex = /[a-z][0-9].*/;
   ```
