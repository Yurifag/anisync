// This file is part of anisync.
// Copyright (C) 2020 Jannes Grzebien
// 
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
// 
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
// 
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

window.onload = function() {
    if(init.load) {
        socket = io.connect("/" + init.load);
        socket.on("redirect", function(url) {
            if(!url) return false;
            window.location = url;
        });

        ReactDOM.render(React.createElement(init.components[init.load].App), document.getElementById("app-mount"));
    }
};
