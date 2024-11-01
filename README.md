# HUGEMS: Harvard University Gems
This is the repository for the [website](https://jeqcho.github.io/harvard-gems) (also known as [hugems.net](hugems.net)). You can check out the code for web scraping and analytics at [this other repo](https://github.com/jeqcho/harvard_gem_finder).

![Screenshot of the Harvard Gem website](https://github.com/jeqcho/harvard_gem_finder/raw/main/readme-images/readme-screenshot.png)

If you found it useful, you can

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jeqcho)


## Steps to update
We use Angular CLI, so make sure to download it beforehand.

1. Create a new component by running in terminal `ng generate component Fall2024`. Check if it is now imported at `app.module.ts`.
2. Edit `src/app-routing.module.ts`.
3. Edit `src/app/archive/archive.component.ts`. Remember to upload the `verbose_course_ratings.csv` to Drive.
4. Copy over the `output_data` folder from the scraping repo to the folder of the component and rename it to just `data`.
4. Copy over the `departments` folder from the scraping repo into a new folder under `assets/data/` named after the next term.
5. Copy over the `???.component.ts` from another recent component and make necessary changes. You need to handpick the featured ~5 Super Gems, Hidden Gems, and Great Courses from `course_ratings_analysis.ipynb` in the scraping repo (look for the cells that present to you a candidate list of each). Also edit the my.harvard search term.
6. Copy over the `???.component.html` from another recent component and make necessary changes. Remember to change the number of classes near the top, and the link at the bottom. Simply count the number of files in the `myharvard` folder in the scraping repo, or count the number of files in the `QGuides`, which can be more accurate (for the past year, and this is the number reported at the website).
7. Run `ng serve` to test it out.
8. `ng deploy`

## Contributions
Contributions are welcome! Please open a pull request.

### Contributor list
- @jnberkman
