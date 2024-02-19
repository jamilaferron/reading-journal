"""create books table

Revision ID: c105242679eb
Revises: 
Create Date: 2024-02-19 13:59:01.727649

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = 'c105242679eb'
down_revision: Union[str, None] = None
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    op.execute("""
    create table books (
        id bigserial primary key,
        title text,
        author text,
        genre text,
        image text,
        rating float
    )
    """)


def downgrade() -> None:
    op.execute("drop table books;")
