input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showString("LABAS! MAMYTE")
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Asleep)
    music.play(music.stringPlayable("E D E D E D E D ", 180), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    music.play(music.tonePlayable(175, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.Shake, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showIcon(IconNames.Silly)
})
input.onGesture(Gesture.TiltRight, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
    basic.showString("HEI! ANDRIUS")
})
