<div align="center">
    <br>
    <a href="https://storeen-frontend.now.sh">
        <img src="https://github.com/murillo94/storeen-frontend/blob/master/static/images/logo-all-horizontal.svg" alt="Storeen" width="250px">
    </a>
</div>

## Running

```
$ yarn install
$ yarn dev
# or
$ yarn dev -p <custom_port>
```

## Coding standards

### Adding new libs

Avoid add libs to the project, all the ui components/logics must have to be create expect in specifics cases where adding a new lib is the best thing to do.

### Ordering imports

```
import React from 'react' -> if needed
import 3rd libs

# space

import storeen components

# space

import storeen utils

# space

import storeen themes
```
