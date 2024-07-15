import React, { useRef, useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faStop } from '@fortawesome/free-solid-svg-icons';
import './styles/AudioPlayer.css'
import bgMusic from '../../assets/audio/Stars_in_the_Night.mp3'

const tracks = [
    {title: 'Stars in the Night', src: bgMusic},
]

const AudioPlayer = () => {

    const audioRef = useRef(null);
    const [audioVolume, setAudioVolume] = useState(0.11);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(tracks[0]);
    const [isRepeating, setIsRepeating] = useState(true);
    const [isPlaying, setIsPlaying] = useState(false);
    

    const playAudio = () => {
        audioRef.current.play();
        setIsPlaying(true);
    }

    const pauseAudio = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    }

    const stopAudio = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        if(isPlaying){
            setIsPlaying(false);
        }
    }

    const changeVolume = (e) => {
        const newVolume = e.target.value;
        setAudioVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    const onLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    }

    const onTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    }

    const onSeek = (e) => {
        const newTime = e.target.value;
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
    }

    const selectTrack = (track) => {
        setCurrentTrack(track);
        audioRef.current.pause();
        audioRef.current.src = track.src;
        audioRef.current.load();
        playAudio();
    }

    const toggleRepeat = () => {
        setIsRepeating(!isRepeating);
    }

    useEffect(() => {
      const audioElement = audioRef.current;
      audioElement.volume = audioVolume;
      audioElement.autoplay = true;

      const handleEnded = () => {
        if(isRepeating){
            audioElement.currentTime = 0;
            playAudio();
        }
      }

      audioElement.addEventListener('loadedmetadata', onLoadedMetadata);
      audioElement.addEventListener('timeupdate', onTimeUpdate);
      audioElement.addEventListener('ended', handleEnded);

      console.log(`current volume: ${audioVolume}`);
    
      return () => {
        audioElement.removeEventListener('loadedmetadata', onLoadedMetadata);
        audioElement.removeEventListener('timeupdate', onTimeUpdate);
        audioElement.removeEventListener('ended', handleEnded);
      }
    }, [audioVolume, isRepeating])
    

  return (
    <div className='audio-player-frame'>
        <audio ref={audioRef}>
            <source src={currentTrack.src} type='audio/mpeg' />
            This browser does not support the audio element.
        </audio>
        <div className='control-console'>
            <div className='control-console-panel btn-panel'>
                <div className={`audio-player-btn ${isPlaying ? 'pause' : 'play'}`} onClick={isPlaying ? pauseAudio : playAudio}>
                    <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
                </div>
                <div className='audio-player-btn stop' onClick={stopAudio}>
                <FontAwesomeIcon icon={faStop} />
                </div>
                <div className={`audio-player-btn repeat ${isRepeating ? 'repeat-active' : 'repeat-inactive'}`} onClick={toggleRepeat}>
                    R
                </div>
            </div>
            {/* <div className='control-console-panel slider-panel'>
                <input 
                    className='volume-control'
                    type='range'
                    min={0}
                    max={1}
                    step={0.01}
                    value={audioVolume}
                    onChange={changeVolume}
                />
            </div> */}
        </div>
        <div className='track-nfo'>
            <div className='track-title'>
                {currentTrack.title}
            </div>
            <div className='track-duration'>
                {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(duration / 60)}:{('0' + (duration % 60)).slice(-2)}
            </div>
        </div>
        <div className='seek-bar-frame'>
        </div>
        <div className='time-display'>
            {/* {Math.floor(currentTime / 60)}:{('0' + Math.floor(currentTime % 60)).slice(-2)} / {Math.floor(duration / 60)}:{('0' + (duration % 60)).slice(-2)} */}
        </div>

        
    </div>
  )
}

export default AudioPlayer