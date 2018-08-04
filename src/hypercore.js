const hypercore = require('hypercore')
const swarm = require('webrtc-swarm')
const signalhub = require('signalhub')
const defaults = require('dat-swarm-defaults')
const ram = require('random-access-memory')
const pump = require('pump')

const constants = require('./constants')

export default () => new Promise((accept, reject) => {
    const feed = hypercore(
        filename => (ram()),
        Buffer.from(constants.HYPER_KEY, 'hex'),
        {valueEncoding: 'utf-8', overwrite: true})

    feed.once('sync', () => {
        accept(feed)
    })

    feed.on('ready', () => {
        const hub = signalhub('poroteo', 'https://signalhub-ayzcyqajuz.now.sh/')

        const sw = swarm(hub, defaults())

        sw.on('disconnect', (peer, id) => {
            console.error('disconnected', id)
        })

        sw.on('peer', function (conn, info) {
            const peer = feed.replicate({live: true})
            pump(conn, peer, conn)

            console.log('connected to', sw.peers.length, 'peers', feed.length)
        })
    })

})
