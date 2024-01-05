import { world, system, BlockPermutation, Block } from '@minecraft/server';
import { ActionFormData, MessageFormData, ModalFormData } from '@minecraft/server-ui';

// function playSubtitles(subtitles, players) {
//     let state = -1;
//     subtitles.forEach(function(value, key) {
//         system.runTimeout(() => {
//             state++;
//             players.forEach(player => {
//                 player.onScreenDisplay.setActionBar(key);
//             });
//         }, value);
//     });
// }

// function audiologText(name, message, time) {
//     let isPlaying = true;
//     system.runInterval(() => {
//         if (!isPlaying) return;
//         world.getAllPlayers().forEach(player => {
//             player.sendMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§6Voice of\n§6§l" + name.toUpperCase() + "\n\n§r" + message);
//         });
//     });
//     system.runTimeout(() => isPlaying = false, time - 128);
// }

// function audiologEnd(delay, cassettePlayer) {
//     system.runTimeout(() => {
//         world.playSound("cassette_player.off", cassettePlayer.location, {pitch: 1.0, volume: 1.0,});
//         system.runTimeout(() => {
//             cassettePlayer.setPermutation(BlockPermutation.resolve("batim:cassette_player", {"batim:is_playing": false}));
//         }, 40);
//     }, delay);
// }

function playAudioLog(audiologId, name, message, cassettePlayer, blockDirection, delay) {
    let isPlaying = true;
    system.runInterval(() => {
        if (!isPlaying) return;
        world.getAllPlayers().forEach(player => {
            player.sendMessage("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n§6Voice of\n§6§l" + name.toUpperCase() + "\n\n§r" + message);
        });
    });
    system.runTimeout(() => isPlaying = false, delay - 128);
    system.runTimeout(() => {
        world.playSound("cassette_player.off", cassettePlayer.location, {pitch: 1.0, volume: 1.0,});
        system.runTimeout(() => {
            cassettePlayer.setPermutation(BlockPermutation.resolve("batim:cassette_player", {"batim:is_playing": false, "minecraft:cardinal_direction": blockDirection, "batim:audiolog": audiologId}));
        }, 40);
    }, delay);
}

system.afterEvents.scriptEventReceive.subscribe((e) => {
    if (e.id == "batim:cassette_player.play") {
        if (e.message == "ch1_wally") {
            // audiologText("wally franks", "At this point, I don't get what Joey's plan is for this company. The animations sure aren't being finished on time anymore. And I certainly don't see why we need this... machine. It's noisy, it's messy. And who needs that much ink anyway?\n\nAlso, get this: Joey had each one of us donate something from our work station. We put them on these little pedestals in the break room. To help appease the gods, Joey says. Keep things going.\n\nI think he's lost his mind, but, hey, he writes the checks.\n\nBut I tell you what, if one more of these pipes burst, I'm outta here.", 728);
            // audiologEnd(728, e.sourceBlock);
            playAudioLog("ch1_wally", "wally franks", "At this point, I don't get what Joey's plan is for this company. The animations sure aren't being finished on time anymore. And I certainly don't see why we need this... machine. It's noisy, it's messy. And who needs that much ink anyway?\n\nAlso, get this: Joey had each one of us donate something from our work station. We put them on these little pedestals in the break room. To help appease the gods, Joey says. Keep things going.\n\nI think he's lost his mind, but, hey, he writes the checks.\n\nBut I tell you what, if one more of these pipes burst, I'm outta here.", e.sourceBlock, "north",728);
        } else if (e.message == "ch1_thomas") {
            /*
            It's dark and it's cold and it's stuck in behind every single wall now. In some places, I swear this godforsaken ink is clear up to my knees! Who ever thought that these crummy pipes could hold up under this kind of strain either knows something about pressure I don't, or he's some kind of idiot.
            But the real worst part about all this... are them noises the system makes. Like a dying dog on its last legs. Make no mistake, this place... this... machine... heck, this whole darn thing... it just isn't natural.
            You can bet, I won't be doing any more repair jobs for Mister Joey Drew.
            */
            // audiologText("thomas connor", "It's dark and it's cold and it's stuck in behind every single wall now. In some places, I swear this godforsaken ink is clear up to my knees! Who ever thought that these crummy pipes could hold up under this kind of strain either knows something about pressure I don't, or he's some kind of idiot.\n\nBut the real worst part about all this... are them noises the system makes. Like a dying dog on its last legs. Make no mistake, this place... this... machine... heck, this whole darn thing... it just isn't natural.\n\nYou can bet, I won't be doing any more repair jobs for Mister Joey Drew.",800);            
            // audiologEnd(800, e.sourceBlock);
            playAudioLog("ch1_thomas", "thomas connor", "It's dark and it's cold and it's stuck in behind every single wall now. In some places, I swear this godforsaken ink is clear up to my knees! Who ever thought that these crummy pipes could hold up under this kind of strain either knows something about pressure I don't, or he's some kind of idiot.\n\nBut the real worst part about all this... are them noises the system makes. Like a dying dog on its last legs. Make no mistake, this place... this... machine... heck, this whole darn thing... it just isn't natural.\n\nYou can bet, I won't be doing any more repair jobs for Mister Joey Drew.", e.sourceBlock, "north",800);
        }
    }
    // if (e.id == "batim:cassette_player.play" && e.message == "ch1_wally") {
    //     // const subtitles = new Map([
    //     //     ["At this point, I don't get what Joey's plan is for this company.", 10],
    //     //     ["The animations sure aren't being finished on time anymore.", 90],
    //     //     ["And I certainly don't see why we need this... machine.", 150],
    //     //     ["It's noisy, it's messy. And who needs that much ink anyway?", 210],
    //     //     ["Also, get this:", 300],
    //     //     ["Joey had each one of us donate something from our work station.", 330],
    //     //     ["We put them on these little pedestals in the break room.", 400],
    //     //     ["To help appease the gods, Joey says. Keep things going.", 460],
    //     //     ["I think he's lost his mind, but, hey, he writes the checks.", 540],
    //     //     ["But I tell you what, if one more of these pipes burst, I'm outta here.", 620]
    //     // ]);
    //     //playSubtitles(subtitles, world.getAllPlayers());

    //     audiologText("wally franks", "At this point, I don't get what Joey's plan is for this company. The animations sure aren't being finished on time anymore. And I certainly don't see why we need this... machine. It's noisy, it's messy. And who needs that much ink anyway?\n\nAlso, get this: Joey had each one of us donate something from our work station. We put them on these little pedestals in the break room. To help appease the gods, Joey says. Keep things going.\n\nI think he's lost his mind, but, hey, he writes the checks.\n\nBut I tell you what, if one more of these pipes burst, I'm outta here.", 728);

    //     let cassettePlayer = e.sourceBlock;

    //     system.runTimeout(() => {
    //         world.playSound("cassette_player.off", cassettePlayer.location, {pitch: 1.0, volume: 1.0,});
    //         system.runTimeout(() => {
    //             cassettePlayer.setPermutation(BlockPermutation.resolve("batim:cassette_player", {"batim:is_playing": false}));
    //         }, 40);
    //     }, 728);
    // } else if (e.id == "batim:cassette_player.play" && e.message == "ch1_thomas") {
    //     system.runTimeout(() => {
    //         world.playSound("cassette_player.off", e.sourceBlock.location, {pitch: 1.0, volume: 1.0,});
    //     }, 800);
    // }
});