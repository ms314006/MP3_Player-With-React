import Player from '../../src/lib/Player';
import musics from '../../src/asset/musics';
import playType from '../../src/lib/enum/playType';
import playStatus from '../../src/lib/enum/playStatus';

// create instance
const player = new Player(musics);

describe('Test Player class.', () => {
  test('Check musics', () => {
    expect(player.musics).toEqual(musics);
  });

  test('Check default play music', () => {
    expect(player.currentPlayMusic).toEqual(musics[0]);
  });

  test('Check can get next and previous music on currentMusic', () => {
    player.nextMusic();
    expect(player.currentPlayMusic).toEqual(musics[1]);
    player.previousMusic();
    expect(player.currentPlayMusic).toEqual(musics[0]);
    player.previousMusic();
    expect(player.currentPlayMusic).toEqual(musics[musics.length - 1]);
    player.nextMusic();
    expect(player.currentPlayMusic).toEqual(musics[0]);
  });

  test('Check choice music play', () => {
    player.choiceMusic(musics[3].id);
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
    player.switchPlayType();
    expect(player.playType).toBe(playType.repeat);
    player.switchPlayType();
    expect(player.playType).toBe(playType.random);
  });

  test('Check use sound ( add and sub )', () => {
    expect(player.sound).toBe(20);
    player.addSound();
    expect(player.sound).toBe(21);
    player.subSound();
    expect(player.sound).toBe(20);
  });

});
