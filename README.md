# junyuchen.me

Personal academic website of Junyu Chen, built with [Jekyll](https://jekyllrb.com) on the
[AcademicPages](https://github.com/academicpages/academicpages.github.io) template and hosted on GitHub Pages.
Live at <https://junyuchen.me>.

## Updating content

Most content lives in small data files, so routine updates do not require touching HTML:

| What | Where | Notes |
|---|---|---|
| News / updates | `_data/news.yml` | Add an entry at the top (`date`, Markdown `text`). The home page shows the first 8 and collapses the rest. |
| Publications | `_data/publications.yml` | Add at the top. Set `selected: true` to feature it on the home page. Put a thumbnail in `images/pubs/` (JPEG, about 1000 px wide). |
| Talks / posters | `_data/talks.yml` | Add at the top. Poster/slide PDFs go in `files/`. |
| Software / project pages | `_data/projects.yml` | Cards on the home page. |
| Bio, education, honors | `_pages/about.html` | Home page. |
| CV | `_pages/cv.html` and `files/Junyu_CV_*.pdf` | Update the PDF link in `_pages/about.html`, `_pages/cv.html`, and `author.cv` in `_config.yml` when the CV is renamed. |
| Teaching | `_pages/teaching.html` | Courses and lecture materials. |
| Navigation | `_data/navigation.yml` | Masthead links. |
| Profile photo and links | `_config.yml` (`author:`) | Avatar file is `images/junyu_chen.jpg`. |

Blog posts are Markdown files in `_posts/`.

## Registration playground

`/playground/` runs two small 2D registration networks (MIR `HyperVFASPR` and `HyperVFA`) in the browser with
ONNX Runtime Web. The page is `_pages/playground.html` + `assets/js/playground.js`; demo slices and label maps are in
`assets/playground/samples/`, the ONNX models and their metadata in `assets/playground/models/`. Training, export,
and asset scripts live outside this repo in `../GitHub_IO_playground/` (see its `train_web_hypervfa.py` and
`export_web_models.py`). To swap in a retrained model, re-run the export script and copy the `*_fp16w.onnx` and
`*.json` files into `assets/playground/models/`; the JavaScript reads the hyperparameter ranges from the JSON.

## Styling

Theme colours and typography are in `_sass/_variables.scss`; all site-specific components
(publication cards, badges, timelines, news list, buttons) are in `_sass/_custom.scss`.
Small interactive behaviours (news "show all", publication filter) are in `assets/js/site.js`.

## Building locally

GitHub Pages builds the site automatically on push to `master`. To preview locally with Docker:

```bash
docker run --rm -u "$(id -u):$(id -g)" -e HOME=/tmp -e JEKYLL_NO_BUNDLER_REQUIRE=true \
  -p 4000:4000 -v "$PWD":/srv/jekyll jekyll/jekyll:pages \
  sh -c "cd /srv/jekyll && jekyll serve --host 0.0.0.0"
```

Then open <http://localhost:4000>.
