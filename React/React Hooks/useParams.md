Here's a simple and practical example of using useParams in React Router:

```jsx
// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserProfile from './UserProfile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Define route with parameter :userId */}
        <Route path="/user/:userId" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
```

```jsx
// UserProfile.jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  // Extract userId from URL
  const { userId } = useParams();

  return (
    <div>
      <h1>User Profile</h1>
      <p>User ID: {userId}</p>
    </div>
  );
}

export default UserProfile;
```

Now if you visit `/user/123`:
- The URL parameter `:userId` will be `123`
- UserProfile component will display: "User ID: 123"

You can also use multiple parameters:

```jsx
// App.jsx
<Route path="/shop/:category/:productId" element={<Product />} />

// Product.jsx
function Product() {
  const { category, productId } = useParams();
  
  return (
    <div>
      <h2>Category: {category}</h2>
      <p>Product ID: {productId}</p>
    </div>
  );
}
```

When visiting `/shop/electronics/456`:
- `category` will be "electronics"
- `productId` will be "456"

That's all you need to get started with useParams! It's a simple but powerful way to access URL parameters in your React components.
