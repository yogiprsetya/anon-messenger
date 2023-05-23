# System Design

```
From this README we will build a monolithic app, consisting of three services namely backend, frontend dashboard and micorsite, in one repo. At least when this project is setup, we don't need these services to be made distributed.
```

# User journey

Bare minimum userflow indetification.

## Create Microsite

```
Users can create pages that can be accessed by the public (let's call it a microsite), consisting of several forms that function to accommodate anonymous messages.
```

1. Admin dashboard
2. Publish
3. Setup name and description
4. Publish microsite
5. User can un-publish later

## Manage all anon message

1. Goto microtites
2. Select microsite
3. User cannot delete messages
4. User cannot edit messages
5. User can unpublish microsite
