function encodeUTF8(str) {
  const bytes = [];

  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);

    if (charCode < 0x80) {
      bytes.push(charCode);
    } else if (charCode < 0x800) {
      bytes.push(0xc0 | (charCode >> 6), 0x80 | (charCode & 0x3f));
    } else if (charCode < 0x10000) {
      bytes.push(0xe0 | (charCode >> 12), 0x80 | ((charCode >> 6) & 0x3f), 0x80 | (charCode & 0x3f));
    } else {
      bytes.push(
        0xf0 | (charCode >> 18),
        0x80 | ((charCode >> 12) & 0x3f),
        0x80 | ((charCode >> 6) & 0x3f),
        0x80 | (charCode & 0x3f),
      );
    }
  }

  return bytes;
}

function _manualBase64Encode(str) {
  const base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
  let result = '';

  // Convert string to UTF-8 bytes
  const utf8Bytes = encodeUTF8(str);

  // Process every 3 bytes
  for (let i = 0; i < utf8Bytes.length; i += 3) {
    const chunk =
      (utf8Bytes[i] << 16) |
      (i + 1 < utf8Bytes.length ? utf8Bytes[i + 1] << 8 : 0) |
      (i + 2 < utf8Bytes.length ? utf8Bytes[i + 2] : 0);

    result += base64chars[(chunk >> 18) & 63];
    result += base64chars[(chunk >> 12) & 63];

    if (i + 1 < utf8Bytes.length) {
      result += base64chars[(chunk >> 6) & 63];
    } else {
      result += '=';
    }

    if (i + 2 < utf8Bytes.length) {
      result += base64chars[chunk & 63];
    } else {
      result += '=';
    }
  }

  return result;
}

export function textToBase64(text) {
  try {
    // For browser environment
    if (typeof window !== 'undefined') {
      return btoa(
        encodeURIComponent(text).replace(/%([0-9A-F]{2})/g, (match, p1) => {
          return String.fromCharCode('0x' + p1);
        }),
      );
    }
    // For Node.js environment
    else if (typeof Buffer !== 'undefined') {
      return Buffer.from(text).toString('base64');
    }
    // Fallback implementation
    else {
      return _manualBase64Encode(text);
    }
  } catch (e) {
    console.error('Encoding error:', e);
    return null;
  }
}
