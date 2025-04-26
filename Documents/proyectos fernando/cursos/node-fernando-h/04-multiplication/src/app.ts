import { yarg  } from "./config/plugins/args.plugin"
import { ServerApp } from "./presentation/server-app"

// console.log(process.argv)
// console.log(yarg.b)


(async() => {

   await main()
   console.log('finalizando app')


})()

async function main() {

   const { b:base, l:limit, s:show } = yarg

  ServerApp.run({base , limit, show})

    
}