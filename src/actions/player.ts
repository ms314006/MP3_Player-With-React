import IMusic from '../lib/interface/IMusic';

export const PLAY_MUSIC = 'PLAY_MUSIC';

export const playMusic = () => ({
  type: PLAY_MUSIC,
});

export const STOP_MUSIC = 'STOP_MUSIC';

export const stopMusic = () => ({
  type: STOP_MUSIC,
});

export const PLAY_NEXT_MUSIC = 'PLAY_NEXT_MUSIC';

export const playNextMusic = () => ({
  type: PLAY_NEXT_MUSIC,
});

export const PLAY_PREVIOUS_MUSIC = 'PLAY_PREVIOUS_MUSIC';

export const playPreviousMusic = () => ({
  type: PLAY_PREVIOUS_MUSIC,
});

export const PLAY_CHOICE_MUSIC = 'PLAY_CHOICE_MUSIC';

export const playChoiceMusic = (musicId: string) => ({
  type: PLAY_CHOICE_MUSIC,
  payload: {
    musicId,
  },
});

export const UPDATE_CURRENT_PLAY_TIME = 'UPDATE_CURRENT_PLAY_TIME';

export const updateCurrentPlayTime = () => ({
  type: UPDATE_CURRENT_PLAY_TIME,
});

export const CHANGE_CURRENT_PLAY_TIME = 'CHANGE_CURRENT_PLAY_TIME';

export const changeCurrentPlayTime = (second: number) => ({
  type: CHANGE_CURRENT_PLAY_TIME,
  payload: {
    second,
  },
});

export const UPDATE_SOUND = 'UPDATE_SOUND';

export const updateSound = (sound: number) => ({
  type: UPDATE_SOUND,
  payload: {
    sound,
  },
});
