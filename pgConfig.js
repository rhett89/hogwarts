import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

export const pool = new pg.Pool({connectionString: 'postgres://rhett89_bd_user:1kHVBsfTdLunzFoRm7LbTVcxaDh3zW2r@dpg-cf2mokirrk0bppc2800g-a.oregon-postgres.render.com/rhett89_bd'})