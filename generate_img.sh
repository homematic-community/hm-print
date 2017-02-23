#!/bin/sh
mkdir -p tmp
cp -a programmedrucken tmp/
cp -a update_script tmp/
cp -a addon tmp/
cp -a rc.d tmp/
cp -a www tmp/
cp -a VERSION tmp/addon/
cd tmp
tar --owner=root --group=root --exclude=.DS_Store -czvf ../hm-print-$(cat ../VERSION).tar.gz *
cd ..
rm -rf tmp
