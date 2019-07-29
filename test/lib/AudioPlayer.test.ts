import AudioPlayer from '../../src/lib/AudioPlayer';
import musics from '../../src/asset/musics';
import playType from '../../src/lib/enum/playType';
import playStatus from '../../src/lib/enum/playStatus';

// create instance
const player = new AudioPlayer(musics);

describe('Test Player class.', () => {
  test('Check musics', () => {
    expect(player.musics).toEqual(musics);
  });

  test('Check default play music', () => {
    expect(player.currentPlayMusic).toEqual(musics[0]);
  });

  test('Check can get next and previous music on currentMusic', () => {
    player.playNextMusic();
    expect(player.currentPlayMusic).toEqual(musics[1]);
    player.playPreviousMusic();
    expect(player.currentPlayMusic).toEqual(musics[0]);
    player.playPreviousMusic();
    expect(player.currentPlayMusic).toEqual(musics[musics.length - 1]);
    player.playNextMusic();
    expect(player.currentPlayMusic).toEqual(musics[0]);
  });

  test('Check choice music play', () => {
    player.playChoiceMusic(musics[3].id);
    expect(player.currentPlayMusic).toEqual(musics[3]);
  });

  test('Check play and stop music', () => {
    expect(player.playStatus).toBe(playStatus.play);
    player.stopMusic();
    expect(player.playStatus).toBe(playStatus.stop);
    player.playMusic();
    expect(player.playStatus).toBe(playStatus.play);
  });

  test('Check switch play type', () => {
    expect(player.playType).toBe(playType.loop);
    player.changePlayType();
    expect(player.playType).toBe(playType.repeat);
    player.changePlayType();
    expect(player.playType).toBe(playType.random);
  });
});
