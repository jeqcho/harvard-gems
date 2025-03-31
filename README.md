# HUGEMS: Harvard University Gems
This is the repository for the [website](https://jeqcho.github.io/harvard-gems) (also known as [hugems.net](hugems.net)). You can check out the code for web scraping and analytics at [this other repo](https://github.com/jeqcho/harvard_gem_finder).

![Screenshot of the Harvard Gem website](https://github.com/jeqcho/harvard_gem_finder/raw/main/readme-images/readme-screenshot.png)

If you found it useful, you can

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jeqcho)


## Steps to update
We use Angular CLI, so make sure to download it beforehand.

1. Create a new component by running in terminal `ng generate component Fall2025`. Check if it is now imported at `app.module.ts`.
2. Edit `src/app/app-routing.module.ts` to include the new component and to edit the default path.
3. Edit `src/app/archive/archive.component.ts`.
4. Make a new folder under `assets/data/` with the appriopriate file name and over the contents of the output folder from the scraping repo (e.g. the folder `2025_Fall_2024_Fall` which contains `super_gems.json` and the `departments` folder).
5. Copy over the `???.component.ts` from another recent component and make necessary changes. You need to handpick the featured ~5 Super Gems, Hidden Gems, and Great Courses from `course_ratings_analysis.ipynb` in the scraping repo (look for the cells that present to you a candidate list of each). Also edit the my.harvard search term.
6. Copy over the `???.component.html` from another recent component and make necessary changes. Remember to change the number of classes near the top, and the link at the bottom. Simply count the number of rows in `release/myharvard/YEAR_TERM.csv` in the scraping repo.
7. Move the old component folder to `src/app/archive`, and update the import at `app.module.ts` and `app-routing.module.ts`.
7. Run `ng serve` to test it out.
8. `ng deploy`

## Contributions
Contributions are welcome! Please open a pull request.

### Contributor list
- @jnberkman

## TODO

- FIX: Checking [https://hugems.net/archive] on a HTTP status checker like [https://httpstatus.io/] shows that the webpage returns 404, though it renders the archive page correctly.
- IMPROVEMENT: Since this project was completed and since maintained before the LLMs took off, it might be helpful to do a scan on Cursor to identify possible bugs and improvement suggestions, as well as cleaning up code and making it more readable.
- Fix Expos 20 for Fall 2025