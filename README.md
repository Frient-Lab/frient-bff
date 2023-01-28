<h1 align="center">API Frient</h1>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-install">How to install</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

# 📖 About the project
<p>The Frient API aims to provide information to the Frient frontend.</p>

- GET /quiz/:id: returns the participant's quiz;
- GET /personality: returns the participant's personality;
- GET /question: returns all quiz questions;
- POST /quiz: sends all quiz answers;
- POST /people: registers a person in the system;
- POST /personality: registers a personality;

# 🛠 Technologies

This project was developed with the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [TypeOrm](https://typeorm.io/)
- [PostgreeSQL](https://www.postgresql.org/)


# 👨‍💻 How to install

```bash
# Clone this repository
$ git clone https://github.com/gabrielvieira1/Frient-Lab/frient-bff.git

# Go into the repository folder and install dependencies
$ cd frient-bff

# Install dependencies

$ npm install

# Create database

$ createdb frient

# Rum Migration

$ yarn typeorm migration:run

# Revert Migration

$ yarn typeorm migration:revert

# Run Project

$ npm start
```

## 🤔 How to contribute

- Make a fork;
- Create a branck with your feature: `git checkout -b my-feature`;
- Commit changes: `git commit -m 'feat: My new feature'`;
- Make a push to your branch: `git push origin my-feature`.

After merging your receipt request to done, you can delete a branch from yours.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for details.
