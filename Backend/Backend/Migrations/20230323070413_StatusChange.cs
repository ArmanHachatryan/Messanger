using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class StatusChange : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_StatusList_StatusId",
                table: "Data");

            migrationBuilder.DropIndex(
                name: "IX_Data_StatusId",
                table: "Data");

            migrationBuilder.DropColumn(
                name: "StatusId",
                table: "Data");

            migrationBuilder.AddColumn<int>(
                name: "Status",
                table: "Data",
                type: "integer",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "Data");

            migrationBuilder.AddColumn<int>(
                name: "StatusId",
                table: "Data",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Data_StatusId",
                table: "Data",
                column: "StatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_StatusList_StatusId",
                table: "Data",
                column: "StatusId",
                principalTable: "StatusList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
