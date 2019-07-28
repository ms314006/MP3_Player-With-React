import IMusic from '../lib/interface/IMusic';

export const PLAY_MUSIC = 'PLAY_MUSIC';

export const playMusic = () => ({
  type: PLAY_MUSIC,
});

export const STOP_MUSIC = 'STOP_MUSIC';

export const stopMusic = () => ({
  type: STOP_MUSIC,
});

export const NEXT_MUSIC = 'NEXT_MUSIC';

export const nextMusic = () => ({
  type: NEXT_MUSIC,
});

export const PRIVIOUS_MUSIC = 'PRIVIOUS_MUSIC';

export const priviousMusic = () => ({
  type: PRIVIOUS_MUSIC,
});

export const CHOICE_MUSIC = 'CHOICE_MUSIC';

export const choiceMusic = (musicId: string) => ({
  type: CHOICE_MUSIC,
  payload: {
    musicId,
  },
});

export const UPDATE_SOUND = 'UPDATE_SOUND';

export const updateSound = (sound: number) => ({
  type: UPDATE_SOUND,
  payload: {
    sound,
  },
});
