# Github action markdown link extract to json

Extracts link from a section inside a markdown file and stores them into a json file

# Hello world javascript action

This action extract all links from a markdown file or a configured section and stores them into a json file.

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## `out-filename`

**Required** Output filename in which links are store as json.

## `section`

**Optional** Section to parse in stead of whole document.


## Outputs

## `time`

The time we greeted you.

## Example usage

uses: actions/github-action-markdown-link-extract-to-json@v1.1
with:
  out-filename: './links.json'
  section: '## Links'

## Sponsored by Quiqr

- [Quiqr](https://quiqr.org) - Hugo Websites for everyone

## Contribute
