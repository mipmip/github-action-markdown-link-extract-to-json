# Github action markdown link extract to json

Extracts link from a section inside a markdown file and stores them into a json file

## Inputs

### `in-file`

**Required** Input filename with markdown.

### `out-file`

**Required** Output filename in which links are store as json.

### `section`

**Optional** Section to parse in stead of whole document.

## Example usage

```
uses: actions/github-action-markdown-link-extract-to-json@v1.1
with:
  in-file: './links.json'
  out-file: './links.json'
  section: '## Links'
```

## Example Implementation

<a href="https://github.com/quiqr/quiqr-community-templates"><img src="https://quiqr.org/quir-community-templates-badge.svg" /></a>

This is action is developed for Quiqr Community Templates. It helps converting all links to templates from the README into a json-file which is used by the Quiqr Desktop application.

[Quiqr](https://quiqr.org) - Hugo Websites for everyone

## Contribute

Issues and PR's are welcome. Be polite.
