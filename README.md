# Netan - A network analyser for Raspberry Pi's

Common network diagnostic tools wrapped in a web interface for hobbyists and professionals to make use of.

-   LLDP neighbours including VLAN information
-   Address information
-   Pinging - customise a selction og IP's to be pinged.
-   Script running - define a script to run on the switch you plug into as soon as you plug in a network cable - useful for flaashing VLANs onto switchports.
-   Mustache templating to allow pings and script to run on the current port or gateway.

# Installion: Development

1. Install Raspberry Pi OS on your Pi and enable SSH.
2. Install Docker on your Pi. See these instructions for Debian - https://docs.docker.com/engine/install/debian/
3. Clone this repository `git clone https://github.com/ryanmccartney/netan`
4. Change directories into the repository `cd ./netan`
5. Run `docker compose up -d` to buld and run Netan
6. Find netan on port 80.

This install will work on most OS's not just Raspberry Pi's. It relies on the host netwokring feature of Docker which is only avalible on linux systems.

# Installion: Production

This project is currently in active devleopment so there is any close to a production build at the moment.

# Avalible Variables

In order to allow you to script for abstract concepts like the current port or gateway netan uses mustache templating. That means you can use the following varaibles anwhere in netan and they'll be subsututed for their current value at runtime.

-   `{{currentport}}` - Current switchport gathered from LLDP. Something like `gi/0/24`.
-   `{{gateway}}` - Current gateway address on the selected network interface.
-   `{{ipv4}}` - Current IPv4 address on the selected network interface.
