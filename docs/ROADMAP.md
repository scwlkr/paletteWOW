# paletteWOW roadmap

## Current release direction

Keep the app fast, minimal, free, and focused on generating, adjusting, sharing, and exporting color palettes.

The fresh start closes the inherited dependency PR queue, updates the supported runtime/dependency baseline, and moves hosting to Octal8 with an OVHcloud HTTPS edge. Routine version-update PRs are paused while this baseline settles.

## Current product boundary

The generator works without an account. Google sign-in has been removed. Accounts, profiles, and server-saved palettes are disabled. The existing library model/controller/view source is preserved for later work, without exposed account routes or a development authentication bypass.

## Next work

1. Finish and verify public DNS/TLS cutover and record the exact deployment receipt.
2. Keep meaningful route/data-boundary tests and lightweight real-browser checks for changed generator interactions.
3. Reintroduce dependency maintenance in small validated batches after the fresh baseline is accepted.
4. Consider WorkOS AuthKit before reintroducing accounts and saved palettes. This is direction for future planning, not an implemented or approved integration.
5. Continue small accessibility, responsive, generation, sharing, and export improvements while preserving the current interface.

Sign-in provider adoption, new account flows, data-model changes, major redesigns, and paid services need their own concrete scope. They are not part of this hosting migration.
