FROM mitchtalmadge/hsqldb:2.5.0

ENV HSQLDB_TRACE=true \
HSQLDB_SILENT=false \
HSQLDB_USER=sa \
HSQLDB_PASSWORD=password \
HSQLDB_DATABASE_HOST=locahost \
HSQLDB_DATABASE_ALIAS=test

EXPOSE 9001

VOLUME ./data/db:/opt/database