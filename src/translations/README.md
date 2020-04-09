## How to add a language

- Get a translated version of the en.json file. This is the base file that spawns all translations.
- Add the new file as a json file to the **[languageFiles folder](./languageFiles)**. The convention is the [_language's two letter ISO code_].json
- Add the two letter code to **[letterCodes.ts](./letterCodes.ts)**. Export the language const and add it to the allLanguages const.
- Import the new language in **[allMessages.ts](./allMessages.ts)** as "messages*[\_two letter code*]". Import the language two letter code from **[letterCodes.ts](./letterCodes.ts)**. Add it to the messages variable as [_imported letterCode_]: messages*[\_two letter code*].
- Find the flag icon for the language on **[FlatIcon.com](https://www.flaticon.com/search?word=flags%20circle)** and add the **SVG** to the **[images folder](../images)**.
- Import the svg file into **[languageButtons.ts](./languageButtons.ts)** as [_Language_]Flag.
- Import the two letter code from **[letterCodes.ts](./letterCodes.ts)** into **[languageButtons.ts](./languageButtons.ts)**
- Finally, add the languageButtonData for this language in the following format:

```
    {
      image: [Language]Flag,
      letterCode: [import letterCode],
      languageFull: "String with the full name of the language"
    }
```

- Save a make a PR into Development.
