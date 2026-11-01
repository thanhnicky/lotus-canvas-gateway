<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Content architecture
- Keep existing article paths in the article registry and resolve them through the typed splat route; this preserves incoming links while `/blog` and its topic pages provide discovery.
- Use `src/lib/site.ts` for the canonical public origin and Zalo destination; keep crawler files and generators aligned with that origin.
- Blog views reuse the global material palette, editorial fonts and bundled material imagery; the product gateway remains a separate unchanged experience.
- Keep sitemap dates absent unless sourced from a verified page-specific content timestamp; generation time is not a content update.
- Use the platform's default deployment preset rather than a Vercel-only preset so published deep links can be served by the managed runtime.
