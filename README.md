# Welcome to this little seedling site

- [Remix Docs](https://remix.run/docs)

## Development

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

## Data security

Use this RLS policy

```sql
CREATE POLICY "User data only for this user"
ON public.user_deck
FOR ALL USING (
  auth.uid() = auth_user_id
) WITH CHECK (
  auth.uid() = auth_user_id
);
```