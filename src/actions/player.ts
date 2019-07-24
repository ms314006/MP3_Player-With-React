import IMusic from '../lib/interface/IMusic';

export const CHANGE_MUSIC = 'CHANGE_MUSIC';

export const chageMusic = (music: IMusic) => ({
  type: CHANGE_MUSIC,
  payload: {
    music,
  },
});

export const UPDATE_SOUND = 'UPDATE_SOUND';

export const updateSound = (sound: number) => ({
  type: UPDATE_SOUND,
  payload: {
    sound,
  },
});
