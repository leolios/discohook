import { Context } from "koa"
import { createContext } from "react"

export const RequestContext = createContext<Partial<Context>>({})
RequestContext.displayName = "RequestContext"

export const RequestProvider = RequestContext.Provider
export const RequestConsumer = RequestContext.Consumer
