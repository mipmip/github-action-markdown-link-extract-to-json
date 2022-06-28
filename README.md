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

uses: actions/github-action-markdown-link-extract-to-json@v1.1
with:
  in-file: './links.json'
  out-file: './links.json'
  section: '## Links'

## Sponsored by Quiqr

- [Quiqr](https://quiqr.org) - Hugo Websites for everyone

## Contribute

Issues and PR's are welcome. Be polite.
