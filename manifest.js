const manifest = `<?xml version="1.0" encoding="UTF-8"?>
      <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
      <plist version="1.0">
      <dict>
        <key>items</key>
        <array>
          <dict>
            <key>assets</key>
            <array>
              <dict>
                <key>kind</key>
                <string>software-package</string>
                <key>url</key>
                <string>https://cdn.jsdelivr.net/gh/ninhbaymau/ipa-sign/esign/ipa/Aldo%20Group%20Inc.ipa</string>
              </dict>
            </array>
            <key>metadata</key>
            <dict>
              <key>bundle-identifier</key>
              <string>p3.xyz.yyyue.esign</string>
              <key>bundle-version</key>
              <string>5.0.2</string>
              <key>kind</key>
              <string>software</string>
              <key>title</key>
              <string>ESign</string>
            </dict>
          </dict>
        </array>
      </dict>
      </plist>`;
return new Response(manifest.replace('xxx', name), {
  headers: {
    "content-type": "application/octet-stream",
  },
});
