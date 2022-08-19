FROM node:16

RUN apt update
RUN apt install lldpd -y
RUN service lldpd restart
RUN wget ftp.uk.debian.org/debian/pool/main/e/ethtool/ethtool_5.9-1_arm64.deb
RUN dpkg -i ethtool_5.9-1_arm64.deb

WORKDIR /home/node/netan
COPY . .
RUN npm install

WORKDIR /home/node/netan
CMD [ "sh", "-c", "npm run $NODE_ENV" ]