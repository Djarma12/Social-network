# Social-Network

This is a social network where the user must have an account. After logging in, the user can post comments, sub-comment, like, change account, log out or delete profile.

You can view the project live here:
[Social-Network](https://dusan-social-network.netlify.app/hexa.html)

---

### Table of Contents

- [Description](#description)
- [Getting Started](#getting-started)
- [References](#references)
- [License](#license)

---

## Description

The project was modeled after modern social networks. The user is provided to:

- To create an account, where e-mail, passwords and other parameters are checked if they are entered correctly. After correctly entered data, the data is sent to the database.

- If the user has an account, he needs to enter his email and password, the data is checked against the data from the database, whether the parameters are the same. If they are the same, the application takes them to another page.

- The user is provided with the publication of comments and sub-comments.

- Only comments entered by the user can be deleted.

- If he likes someone's post, he can like it.

- There is a possibility to change the account, specifically the username and email. In addition, he can delete the account permanently or log out.

- All these actions are forwarded to the database, where every change is recorded, so that after each subsequent login, all actions will be remembered.

- The application contains cookies, which expire after 2 days from the last login and use of the application. In particular, these cookies are used to remember the password for the next 2 days, after which they are deleted and the user must log in again.

- To try the application, enter this:<br>
  Mail: `niko@123.com` <br>
  Password: `1231231`

#### Technologies

- HTML
- CSS
- JS

[Back To The Top](#social-network)

---

## Getting Started

To start the project, it is necessary to download the files from the github repository and run them on the live server.

[Back To The Top](#social-network)

---

## References

- I used the Mock API as a kind of database where I stored the data: [Mockapi](https://mockapi.io/)

[Back To The Top](#social-network)

---

## License

MIT License

Copyright (c) [2022] [Dušan Mađar]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

[Back To The Top](#social-network)
