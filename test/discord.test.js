import {ping} from '../test/discord.js'
describe('Discord', function () {
    it('should dm the user', async function () {
        // const mock = jest.fn().mockReturnValueOnce(4).mockReturnValueOnce(3).mockReturnValueOnce(1)
        // console.log(mock())
        // console.log(mock())
        // console.log(mock())
        // expect(mock).toHaveBeenCalled()
        // ping(message)
        const channelMock={
            send : jest.fn()
        }
        const createDMMock = jest.fn().mockResolvedValue(channelMock)
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author:{
                createDM: createDMMock
            }
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(channelMock.send).toHaveBeenCalledWith('pong')
    })
    it('should reply to the user if dm are deactivated', async function () {
        const createDMMock = jest.fn().mockRejectedValue({})
        const message = {
            delete: jest.fn().mockResolvedValue({}),
            reply: jest.fn(),
            author: {
                createDM: createDMMock
            }
        }
        await ping(message)
        expect(message.delete).toHaveBeenCalled()
        expect(message.reply).toHaveBeenCalledWith('pong')
    })
})
