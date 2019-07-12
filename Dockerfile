FROM node:6-alpine

WORKDIR /

ADD . /

ADD init.sh /init.sh
RUN chmod +x /init.sh

CMD ["/init.sh"]