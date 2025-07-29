Sure! Here's how to **set, get, and delete cookies directly (without using any function)** — for **1 hour** or **1 day**:

---

## ✅ 1. **Set Cookie (for 1 hour)**

```javascript
// Set cookie "username" = "shuvo" for 1 hour
const now = new Date();
now.setTime(now.getTime() + (1 * 60 * 60 * 1000)); // 1 hour = 3600000 ms
document.cookie = "username=shuvo; expires=" + now.toUTCString() + "; path=/";
```

---

## ✅ 2. **Set Cookie (for 1 day)**

```javascript
// Set cookie "username" = "shuvo" for 1 day
const day = new Date();
day.setTime(day.getTime() + (1 * 24 * 60 * 60 * 1000)); // 1 day = 86400000 ms
document.cookie = "username=shuvo; expires=" + day.toUTCString() + "; path=/";
```

---

## ✅ 3. **Get Cookie (manually)**

```javascript
// Get cookie "username"
const all = document.cookie.split("; ");
for (let i = 0; i < all.length; i++) {
  const [key, val] = all[i].split("=");
  if (key === "username") {
    console.log(val); // Output the cookie value
  }
}
```

---

## ✅ 4. **Delete Cookie (Expire Immediately)**

```javascript
// Expire cookie immediately
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";
```

---



document.cookie = "username=Ashraful; expires= Mon, 30 May 2023 19:42:00 GMT";


console.log(document.cookie);


