import { Router } from "express";
import UserController from "./app/controllers/UserController";

const router = Router();

router.get( "/", ( req, res ) => {
    // render the index template
    res.render( "index" );
} );

router.post('/users', UserController.store);
export default router;