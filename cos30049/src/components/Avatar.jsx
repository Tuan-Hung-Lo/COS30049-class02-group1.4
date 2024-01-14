import { createAvatar } from '@dicebear/core';
import { micah } from '@dicebear/collection';

const avatar = createAvatar(micah, {
  seed: 'Felix',
  flip: 'false',
  rotate: 0,
  scale: 100,
  radius: 50,
  size: 80,
  backgroundType: ["gradientLinear","solid"]
});

const svg = avatar.toString();