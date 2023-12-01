function rot13(message) {
  return message.replace(/[a-zA-Z]/g, (char) => {
    const offset = char <= "Z" ? 65 : 97;
    return String.fromCharCode(
      ((char.charCodeAt(0) - offset + 13) % 26) + offset
    );
  });
}

console.log(rot13("abcde") === "nopqr");
