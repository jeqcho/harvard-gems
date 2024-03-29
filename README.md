# HUGEMS: Harvard University Gems
This is the repository for the [website](https://jeqcho.github.io/harvard-gems) (also known as [hugems.net](hugems.net)). You can check out the code for web scraping and analytics at [this other repo](https://github.com/jeqcho/harvard_gem_finder).

![Screenshot of the Harvard Gem website](https://github.com/jeqcho/harvard_gem_finder/raw/main/readme-images/readme-screenshot.png)

If you found it useful, you can

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jeqcho)


## Steps to update
1. Create a new component by running in terminal `ng generate component Fall2024`
2. Edit `app-routing.module.ts`.
3. Edit `archive.component.ts`.
4. Copy over the `output_data` folder from the scraping repo to the folder of the component and rename it to just `data`.
4. Copy over the `departments` folder from the scraping repo into `assets/data`.
5. Copy over the `???.component.ts` from another recent component and make necessary changes.
6. Copy over the `???.component.html` from another recent component and make necessary changes. Remember to change the number of classes near the top, and the link at the bottom. Simply count the number of files in the `myharvard` folder in the scraping repo, or count the number of files in the `QGuide`, which can be more accurate (for the past year, and this is the number reported at the website).
7. Run `ng serve` to test it out.
8. `ng deploy`

## Contributions
Contributions are welcome! Please open a pull request.

### Contributor list
- @jnberkman
