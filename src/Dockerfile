FROM node:18

RUN apt update
RUN apt install lldpd -y
RUN service lldpd restart
RUN apt install -y libmnl-dev
RUN wget ftp.uk.debian.org/debian/pool/main/e/ethtool/ethtool_5.9-1_arm64.deb
RUN dpkg -i ethtool_5.9-1_arm64.deb

WORKDIR /home/node
RUN git clone https://github.com/lldpd/lldpd
WORKDIR /home/node/lldpd
RUN ./autogen.sh
RUN ./configure
RUN make
RUN make install

WORKDIR /home/node/netan
COPY . .
RUN npm install

WORKDIR /home/node/netan
CMD [ "sh", "-c", "npm run $NODE_ENV" ]