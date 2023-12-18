# Best-route
A web-app for finding the shortest route between two location in Liễu Giai Ward, Ba Đình District, Hà Nội, Việt Nam.

## About the project 
This work is a team project offered in course *IT3160-Introduction to Artificial Intelligence* of ***Hanoi University of Science and Technology***.
We used A* algorithm for finding the shortest route between two random location that user chose in Liễu Giai Ward, Ba Đình District, Hà Nội, Việt Nam.

### Built with
- [![React][React]][React-url]
- [![Flask][Flask]][Flask-url]
- ![Python][Python]
## Getting Started
### Prerequisites
- [Install NodeJS ](https://nodejs.org/en/download)
- Install NPM
```
npm install npm@latest -g
```
- [Install Flask ](https://flask.palletsprojects.com/en/3.0.x/installation/)
### Installation
1. Clone the repository
2. Install NPM packages
3. Create a Virtual environment
```
$ cd back_end
$ python3 -m venv .venv
```

## Usage
1. Activate the Virtual environment
```
$ cd back_end
$ . .venv/bin/activate
python3 server.py
```
2. Run the React scripts
```
$ cd front_end
$ npm start
```
3. Choose start and destination location
4. Hit **FIND THE WAY** button to request finding way
5. Result may be shown as follow

## Contributing
[![Contributors][contributors-shield]][contributors-url]

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement". Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact
Nguyen Duc Tai - ductaingn.015203@gmail.com

Project Link: https://github.com/ductaingn/Best-route/

## Acknowledgement
Materials:
https://vi.wikipedia.org/wiki/Gi%E1%BA%A3i_thu%E1%BA%ADt_t%C3%ACm_ki%E1%BA%BFm_A*

https://www.youtube.com/watch?v=A60q6dcoCjw&t=776s

[contributors-shield]: https://img.shields.io/badge/CONTRIBUTORS-5-blue?style=flat-square
[contributors-url]: https://github.com/ductaingn/Best-route/graphs/contributors
[React]: https://img.shields.io/badge/React-%230088CC?style=flat-square&logo=react
[React-url]:https://react.dev/
[Flask]: https://img.shields.io/badge/Flask-%23000000?style=flat-square&logo=flask
[Flask-url]: https://flask.palletsprojects.com/en/3.0.x/#
[Python]: https://img.shields.io/badge/Python-%23ECD53F?style=flat-square&logo=python
